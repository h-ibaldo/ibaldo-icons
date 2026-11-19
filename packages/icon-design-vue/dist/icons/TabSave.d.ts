import type { DefineComponent } from 'vue';

export interface TabSaveProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TabSave: DefineComponent<TabSaveProps>;

export default TabSave;
export { TabSave };
