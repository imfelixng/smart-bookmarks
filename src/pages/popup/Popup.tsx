/* eslint-disable @typescript-eslint/no-explicit-any */
import logo from "@assets/images/logo.svg";
import BookmarkIcon from "@assets/icons/bookmark.svg";
import ListIcon from "@assets/icons/list.svg";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Switch,
} from "@components/index";
import { useEffect, useState } from "react";

export default function Popup(): JSX.Element {
  const [bookmarks, setBookmarks] = useState<
    chrome.bookmarks.BookmarkTreeNode[]
  >([]);
  const [readingList, setReadingList] = useState<any[]>([]);

  useEffect(() => {
    chrome.bookmarks.getTree().then((data) => {
      const rawData = data.reduce(
        (r: chrome.bookmarks.BookmarkTreeNode[], e) => {
          const bookmarkList =
            e.children?.reduce(
              (r1: chrome.bookmarks.BookmarkTreeNode[], e1) => [
                ...r1,
                ...(e1.children ?? []),
              ],
              []
            ) ?? [];
          return [...r, ...bookmarkList];
        },
        []
      );
      setBookmarks(rawData);
    });

    (chrome as Record<string, any>).readingList.query({}).then((e: any) => {
      setReadingList(e);
    });
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 text-center min-h-[550px] p-3 ">
      <section className="flex flex-col items-center justify-center">
        <img
          src={logo}
          className="h-36 pointer-events-none animate-spin-slow"
          alt="logo"
        />
      </section>
      <section className="flex flex-col items-center justify-center text-primary text-lg mt-6">
        Welcome to Smart Bookmarks
      </section>
      <section className="my-8">
        <div className="flex flex-row">
          <span className="flex-1 inline-block">
            Attach your bookmarks to search engines.
          </span>
          <Switch />
        </div>
      </section>
      <section>
        <div className="grid gap-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Bookmarks</CardTitle>
              <img src={BookmarkIcon} className="w-5 h-5" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {bookmarks.length ?? "--"}
              </div>
              {/* <p className="text-xs text-muted-foreground">saved links</p> */}
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Reading List
              </CardTitle>
              <img src={ListIcon} className="w-5 h-5" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {readingList.length ?? "--"}
              </div>
              {/* <p className="text-xs text-muted-foreground">saved links</p> */}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
