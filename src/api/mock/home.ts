import { http } from "@/utils/http";

type ListResult = {
    errcode: number;
    data: any;
  };

export function getHomeHotSuggests(): Promise<ListResult> {
    return http.request({
      url: "/home/hotSuggests",
      method: "get",
    });
}

export function getHomeCategories(): Promise<ListResult> {
  return http.request({
    url: "/home/categories",
    method: "get",
  });
}

export function getHomeHouselist(currentPage): Promise<ListResult> {
  return http.request({
    url: "/home/houselist",
    method: "get",
    params: {
      page: currentPage
    }
  });
}
