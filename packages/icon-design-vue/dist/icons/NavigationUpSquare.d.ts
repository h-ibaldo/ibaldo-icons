import type { DefineComponent } from 'vue';

export interface NavigationUpSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const NavigationUpSquare: DefineComponent<NavigationUpSquareProps>;

export default NavigationUpSquare;
export { NavigationUpSquare };
