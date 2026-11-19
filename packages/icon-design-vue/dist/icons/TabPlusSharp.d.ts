import type { DefineComponent } from 'vue';

export interface TabPlusSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TabPlusSharp: DefineComponent<TabPlusSharpProps>;

export default TabPlusSharp;
export { TabPlusSharp };
