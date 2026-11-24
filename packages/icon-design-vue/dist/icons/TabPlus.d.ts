import type { DefineComponent } from 'vue';

export interface TabPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TabPlus: DefineComponent<TabPlusProps>;

export default TabPlus;
export { TabPlus };
