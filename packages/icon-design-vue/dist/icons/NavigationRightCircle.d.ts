import type { DefineComponent } from 'vue';

export interface NavigationRightCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const NavigationRightCircle: DefineComponent<NavigationRightCircleProps>;

export default NavigationRightCircle;
export { NavigationRightCircle };
