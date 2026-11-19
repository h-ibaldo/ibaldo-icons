import type { DefineComponent } from 'vue';

export interface ListBulletsLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ListBulletsLarge: DefineComponent<ListBulletsLargeProps>;

export default ListBulletsLarge;
export { ListBulletsLarge };
