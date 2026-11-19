import type { DefineComponent } from 'vue';

export interface ListStarBulletsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ListStarBullets: DefineComponent<ListStarBulletsProps>;

export default ListStarBullets;
export { ListStarBullets };
