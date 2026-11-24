import type { DefineComponent } from 'vue';

export interface ListStarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ListStar: DefineComponent<ListStarProps>;

export default ListStar;
export { ListStar };
