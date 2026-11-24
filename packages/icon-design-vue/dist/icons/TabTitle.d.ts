import type { DefineComponent } from 'vue';

export interface TabTitleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TabTitle: DefineComponent<TabTitleProps>;

export default TabTitle;
export { TabTitle };
