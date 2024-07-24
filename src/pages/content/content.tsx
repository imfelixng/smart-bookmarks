/* eslint-disable @typescript-eslint/no-explicit-any */
import BookmarkIcon from "@assets/icons/bookmark.svg";
import ListIcon from "@assets/icons/list.svg";
import Fuse from "fuse.js";

import { useEffect, useMemo, useState } from "react";

export const Content = () => {
  const [search] = useState(() => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("q");
  });

  const [bookmarks, setBookmarks] = useState<any[]>([]);
  const [readingList, setReadingList] = useState<any[]>([]);

  function getBookmarksData() {
    return new Promise((resolve, reject) => {
      chrome.runtime.sendMessage(
        { action: "GET_BOOKMARKS_DATA" },
        function (response) {
          if (response.data) {
            resolve(response.data);
          } else {
            reject(new Error("Failed to retrieve bookmarks data"));
          }
        }
      );
    });
  }

  function getReadingListData() {
    return new Promise((resolve, reject) => {
      chrome.runtime.sendMessage(
        { action: "GET_READING_LIST_DATA" },
        function (response) {
          if (response.data) {
            resolve(response.data);
          } else {
            reject(new Error("Failed to retrieve bookmarks data"));
          }
        }
      );
    });
  }

  useEffect(() => {
    getBookmarksData()
      .then((data: any) => {
        setBookmarks(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    getReadingListData()
      .then((data: any) => {
        setReadingList(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const foundItems = useMemo(() => {
    const fuse = new Fuse([...bookmarks, ...readingList], {
      keys: ["title", "url"],
      includeScore: true,
      minMatchCharLength: 3,
    });
    if (!search) return [];

    return fuse.search(search, { limit: 20 });
  }, [bookmarks, readingList, search]);

  if (foundItems.length == 0) return <></>;
  return (
    <div>
      <div className="dark:text-[#e8e8e8] text-2xl">
        Search results from your bookmarks
      </div>
      <div className="mb-8 grid gap-4 divide-y divide-dashed dark:divide-[#313335]">
        {foundItems.map(({ item }: any) => (
          <a key={item.url} href={item.url} target="_blank" rel="noreferrer">
            <div className="mt-4">
              <div className="flex items-center">
                <div className="w-7 h-7 rounded-full border border-[#dadce0] mr-3 bg-[#f1f3f4] p-[2px]">
                  <img
                    src={item.source == "bookmark" ? BookmarkIcon : ListIcon}
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-sm text-[#202124] dark:text-[#dadce0] truncate max-w-[500px]">
                    {item.title ?? "--"}
                  </div>
                  <div className="text-xs text-[#4d5156] dark:text-[#bdc1c6]">
                    {item.url ?? "--"}
                  </div>
                </div>
              </div>
              <h3 className="text-[#1a0dab] dark:text-[#99c3ff] mt-1">
                {item.title ?? "--"}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
