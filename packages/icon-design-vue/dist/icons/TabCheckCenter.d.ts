import type { DefineComponent } from 'vue';

export interface TabCheckCenterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TabCheckCenter: DefineComponent<TabCheckCenterProps>;

export default TabCheckCenter;
export { TabCheckCenter };
