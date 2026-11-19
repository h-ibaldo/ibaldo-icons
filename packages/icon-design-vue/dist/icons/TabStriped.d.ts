import type { DefineComponent } from 'vue';

export interface TabStripedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TabStriped: DefineComponent<TabStripedProps>;

export default TabStriped;
export { TabStriped };
