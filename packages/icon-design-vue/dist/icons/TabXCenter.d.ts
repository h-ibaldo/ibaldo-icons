import type { DefineComponent } from 'vue';

export interface TabXCenterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TabXCenter: DefineComponent<TabXCenterProps>;

export default TabXCenter;
export { TabXCenter };
