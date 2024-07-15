/* eslint-disable @typescript-eslint/no-explicit-any */
chrome.bookmarks.getTree().then((data) => {
  const rawData = data.reduce((r: chrome.bookmarks.BookmarkTreeNode[], e) => {
    const bookmarkList =
      e.children?.reduce(
        (r1: chrome.bookmarks.BookmarkTreeNode[], e1) => [
          ...r1,
          ...(e1.children ?? []),
        ],
        []
      ) ?? [];
    return [...r, ...bookmarkList];
  }, []);

  chrome.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse
  ) {
    if (request.action === "GET_BOOKMARKS_DATA") {
      sendResponse({
        data: rawData.map((e) => ({ ...e, source: "bookmark" })),
      });
    }
  });
});

(chrome as Record<string, any>).readingList.query({}).then((data: any) => {
  chrome.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse
  ) {
    if (request.action === "GET_READING_LIST_DATA") {
      sendResponse({
        data: data.map((e: any) => ({ ...e, source: "reading_list" })),
      });
    }
  });
});
