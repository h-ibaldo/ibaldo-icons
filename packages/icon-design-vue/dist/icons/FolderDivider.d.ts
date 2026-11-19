import type { DefineComponent } from 'vue';

export interface FolderDividerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FolderDivider: DefineComponent<FolderDividerProps>;

export default FolderDivider;
export { FolderDivider };
