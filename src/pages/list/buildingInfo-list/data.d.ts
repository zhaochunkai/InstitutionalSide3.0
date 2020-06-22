export interface TableListItem {
  id: string;
  key: number;
  disabled?: boolean;
  href: string;
  avatar: string;
  name: string;
  title: string;
  owner: string;
  desc: string;
  callNo: number;
  status: number;
  updatedAt: Date;
  createdAt: Date;
  progress: number;
}

export interface TableListPagination {
  total: number;
  pageSize: number;
  current: number;
}

export interface TableListData {
  list: TableListItem[];
  pagination: Partial<TableListPagination>;
}

export interface TableListParams {
  id: string;
  Filter?: string;
  MaxResultCount?: number;
  SkipCount?: number
  sorter?: string;
  status?: string;
  name?: string;
  desc?: string;
  key?: number;
  pageSize?: number;
  currentPage?: number;
}
export interface addBuildsParams {
  id?: string;
  name?: string;
  floorNumber?: number;
  type?: string
  address?: string;
  buildingNumber?: string;
  rooms?: Array<number>;
}