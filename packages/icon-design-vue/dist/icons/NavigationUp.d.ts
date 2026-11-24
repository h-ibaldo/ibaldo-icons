import type { DefineComponent } from 'vue';

export interface NavigationUpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const NavigationUp: DefineComponent<NavigationUpProps>;

export default NavigationUp;
export { NavigationUp };
