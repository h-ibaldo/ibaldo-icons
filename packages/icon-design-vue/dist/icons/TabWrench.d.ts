import type { DefineComponent } from 'vue';

export interface TabWrenchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TabWrench: DefineComponent<TabWrenchProps>;

export default TabWrench;
export { TabWrench };
