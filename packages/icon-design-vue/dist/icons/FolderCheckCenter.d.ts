import type { DefineComponent } from 'vue';

export interface FolderCheckCenterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FolderCheckCenter: DefineComponent<FolderCheckCenterProps>;

export default FolderCheckCenter;
export { FolderCheckCenter };
