import type { DefineComponent } from 'vue';

export interface TabCheckStripedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TabCheckStriped: DefineComponent<TabCheckStripedProps>;

export default TabCheckStriped;
export { TabCheckStriped };
