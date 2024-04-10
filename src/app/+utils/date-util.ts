import moment from "moment/moment";
import {PostItem} from "../+requests";

export function formatPostDate(post: PostItem) {
    const date = moment(post.date)
    return date.format('MMM Do, YYYY')
}
