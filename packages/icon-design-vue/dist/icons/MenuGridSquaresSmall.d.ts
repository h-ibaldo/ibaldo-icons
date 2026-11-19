import type { DefineComponent } from 'vue';

export interface MenuGridSquaresSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MenuGridSquaresSmall: DefineComponent<MenuGridSquaresSmallProps>;

export default MenuGridSquaresSmall;
export { MenuGridSquaresSmall };
