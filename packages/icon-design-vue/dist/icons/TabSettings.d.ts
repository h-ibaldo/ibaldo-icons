import type { DefineComponent } from 'vue';

export interface TabSettingsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TabSettings: DefineComponent<TabSettingsProps>;

export default TabSettings;
export { TabSettings };
