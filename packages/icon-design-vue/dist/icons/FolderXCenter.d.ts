import type { DefineComponent } from 'vue';

export interface FolderXCenterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FolderXCenter: DefineComponent<FolderXCenterProps>;

export default FolderXCenter;
export { FolderXCenter };
