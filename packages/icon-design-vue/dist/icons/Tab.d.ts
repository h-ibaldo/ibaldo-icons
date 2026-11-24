import type { DefineComponent } from 'vue';

export interface TabProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Tab: DefineComponent<TabProps>;

export default Tab;
export { Tab };
