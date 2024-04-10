import {PostListRequest} from "./models";
import client from "../+common/axios-instance";
import {GenericAbortSignal} from "axios";

export function getList(request?: PostListRequest, signal?: GenericAbortSignal) {
    return client.get(
        `api/posts`,
        {
            params: {
                page: request?.page,
                items_per_page: request?.items_per_page,
                start_date: request?.start_date,
                end_date: request?.end_date,
            },
            signal
        }
    )
}
