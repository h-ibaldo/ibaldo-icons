import type { DefineComponent } from 'vue';

export interface TabSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TabSharp: DefineComponent<TabSharpProps>;

export default TabSharp;
export { TabSharp };
