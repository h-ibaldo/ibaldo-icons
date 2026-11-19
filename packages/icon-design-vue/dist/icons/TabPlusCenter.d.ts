import type { DefineComponent } from 'vue';

export interface TabPlusCenterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TabPlusCenter: DefineComponent<TabPlusCenterProps>;

export default TabPlusCenter;
export { TabPlusCenter };
