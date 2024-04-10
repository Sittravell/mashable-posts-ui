import {PostListRequest} from "./models";
import client from "../+common/axios-instance";
import {GenericAbortSignal} from "axios";

export function getList(request?: PostListRequest, signal?: GenericAbortSignal) {
    return client.get(
        `api/posts`,
        {
            params: {
                page: request?.page,
                itemsPerPage: request?.itemsPerPage,
            },
            signal
        }
    )
}
