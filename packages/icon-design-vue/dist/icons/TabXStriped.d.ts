import type { DefineComponent } from 'vue';

export interface TabXStripedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TabXStriped: DefineComponent<TabXStripedProps>;

export default TabXStriped;
export { TabXStriped };
