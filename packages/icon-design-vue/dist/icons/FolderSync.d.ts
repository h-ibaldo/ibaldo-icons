import type { DefineComponent } from 'vue';

export interface FolderSyncProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FolderSync: DefineComponent<FolderSyncProps>;

export default FolderSync;
export { FolderSync };
