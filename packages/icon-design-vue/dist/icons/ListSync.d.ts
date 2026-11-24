import type { DefineComponent } from 'vue';

export interface ListSyncProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ListSync: DefineComponent<ListSyncProps>;

export default ListSync;
export { ListSync };
