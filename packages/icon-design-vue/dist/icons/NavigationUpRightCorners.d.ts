import type { DefineComponent } from 'vue';

export interface NavigationUpRightCornersProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const NavigationUpRightCorners: DefineComponent<NavigationUpRightCornersProps>;

export default NavigationUpRightCorners;
export { NavigationUpRightCorners };
