import type { DefineComponent } from 'vue';

export interface NavigationUpCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const NavigationUpCircle: DefineComponent<NavigationUpCircleProps>;

export default NavigationUpCircle;
export { NavigationUpCircle };
