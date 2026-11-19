import type { DefineComponent } from 'vue';

export interface NavigationDownCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const NavigationDownCircle: DefineComponent<NavigationDownCircleProps>;

export default NavigationDownCircle;
export { NavigationDownCircle };
