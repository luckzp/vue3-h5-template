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