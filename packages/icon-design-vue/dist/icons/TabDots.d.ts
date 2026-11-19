import type { DefineComponent } from 'vue';

export interface TabDotsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TabDots: DefineComponent<TabDotsProps>;

export default TabDots;
export { TabDots };
