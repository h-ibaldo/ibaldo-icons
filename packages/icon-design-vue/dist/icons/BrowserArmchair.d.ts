import type { DefineComponent } from 'vue';

export interface BrowserArmchairProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserArmchair: DefineComponent<BrowserArmchairProps>;

export default BrowserArmchair;
export { BrowserArmchair };
