import type { DefineComponent } from 'vue';

export interface NavigationRightSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const NavigationRightSquare: DefineComponent<NavigationRightSquareProps>;

export default NavigationRightSquare;
export { NavigationRightSquare };
