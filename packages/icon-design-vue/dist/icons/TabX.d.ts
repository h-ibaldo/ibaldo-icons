import type { DefineComponent } from 'vue';

export interface TabXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TabX: DefineComponent<TabXProps>;

export default TabX;
export { TabX };
