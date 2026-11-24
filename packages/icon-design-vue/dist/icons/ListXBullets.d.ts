import type { DefineComponent } from 'vue';

export interface ListXBulletsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ListXBullets: DefineComponent<ListXBulletsProps>;

export default ListXBullets;
export { ListXBullets };
