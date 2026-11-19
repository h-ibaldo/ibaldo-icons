import type { DefineComponent } from 'vue';

export interface TabPlusCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TabPlusCircle: DefineComponent<TabPlusCircleProps>;

export default TabPlusCircle;
export { TabPlusCircle };
