import type { DefineComponent } from 'vue';

export interface NavigationLeftCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const NavigationLeftCircle: DefineComponent<NavigationLeftCircleProps>;

export default NavigationLeftCircle;
export { NavigationLeftCircle };
