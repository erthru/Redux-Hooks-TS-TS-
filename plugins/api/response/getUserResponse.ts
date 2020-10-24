import { User } from "../../store/user/types";
import IDefaultMetadataResponse from "./defaultPaginateMetadata";

interface IGetUserResponse extends IDefaultMetadataResponse<User> {}

export default IGetUserResponse;
