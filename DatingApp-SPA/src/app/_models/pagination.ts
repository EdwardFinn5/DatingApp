export interface Pagination {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
}

export class PaginatedResult<T> {
    result: T;  // T is waht we use to store our users or whatever we are retrieving
    pagination: Pagination;
}