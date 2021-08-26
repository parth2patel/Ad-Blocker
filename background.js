import defaultFilters from "ad-urls";

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    return { cancel: true };
  },
  { urls: defaultFilters },
  ["blocking"]
);
