import type { DefineComponent } from 'vue';

export interface ListBulletsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ListBullets: DefineComponent<ListBulletsProps>;

export default ListBullets;
export { ListBullets };
