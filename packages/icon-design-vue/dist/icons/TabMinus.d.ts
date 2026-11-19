import type { DefineComponent } from 'vue';

export interface TabMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TabMinus: DefineComponent<TabMinusProps>;

export default TabMinus;
export { TabMinus };
