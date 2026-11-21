import type { DefineComponent } from 'vue';

export interface TabletMobileProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TabletMobile: DefineComponent<TabletMobileProps>;

export default TabletMobile;
export { TabletMobile };
