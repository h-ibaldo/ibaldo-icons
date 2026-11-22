import type { DefineComponent } from 'vue';

export interface ListRefreshProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ListRefresh: DefineComponent<ListRefreshProps>;

export default ListRefresh;
export { ListRefresh };
