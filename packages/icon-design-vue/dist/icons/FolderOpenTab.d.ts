import type { DefineComponent } from 'vue';

export interface FolderOpenTabProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FolderOpenTab: DefineComponent<FolderOpenTabProps>;

export default FolderOpenTab;
export { FolderOpenTab };
