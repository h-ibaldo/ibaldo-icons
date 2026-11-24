import type { DefineComponent } from 'vue';

export interface TabPlusStripedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TabPlusStriped: DefineComponent<TabPlusStripedProps>;

export default TabPlusStriped;
export { TabPlusStriped };
