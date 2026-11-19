import type { DefineComponent } from 'vue';

export interface NavigationUpRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const NavigationUpRight: DefineComponent<NavigationUpRightProps>;

export default NavigationUpRight;
export { NavigationUpRight };
