interface IDefaultMetadataResponse<T> {
    page: number;
    per_page: number;
    total: number;
    total_pages: 2;
    data: Array<T>;
}

export default IDefaultMetadataResponse