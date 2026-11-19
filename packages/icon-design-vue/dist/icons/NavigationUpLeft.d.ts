import type { DefineComponent } from 'vue';

export interface NavigationUpLeftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const NavigationUpLeft: DefineComponent<NavigationUpLeftProps>;

export default NavigationUpLeft;
export { NavigationUpLeft };
