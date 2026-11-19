import type { DefineComponent } from 'vue';

export interface TabFolderOpenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TabFolderOpen: DefineComponent<TabFolderOpenProps>;

export default TabFolderOpen;
export { TabFolderOpen };
