import type { DefineComponent } from 'vue';

export interface NavigationLeftSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const NavigationLeftSquare: DefineComponent<NavigationLeftSquareProps>;

export default NavigationLeftSquare;
export { NavigationLeftSquare };
