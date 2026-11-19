import type { DefineComponent } from 'vue';

export interface FolderXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FolderX: DefineComponent<FolderXProps>;

export default FolderX;
export { FolderX };
