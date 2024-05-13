import { http } from "@/utils/http";

type ListResult = {
    errcode: number;
    data: any;
  };

export function getCityAll(): Promise<ListResult> {
    return http.request({
      url: "/city/all",
      method: "get",
    });
}