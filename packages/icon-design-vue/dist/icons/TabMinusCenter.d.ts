import type { DefineComponent } from 'vue';

export interface TabMinusCenterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TabMinusCenter: DefineComponent<TabMinusCenterProps>;

export default TabMinusCenter;
export { TabMinusCenter };
