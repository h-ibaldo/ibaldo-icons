import type { DefineComponent } from 'vue';

export interface TabCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TabCheck: DefineComponent<TabCheckProps>;

export default TabCheck;
export { TabCheck };
