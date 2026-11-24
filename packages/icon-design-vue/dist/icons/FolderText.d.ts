import type { DefineComponent } from 'vue';

export interface FolderTextProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FolderText: DefineComponent<FolderTextProps>;

export default FolderText;
export { FolderText };
