import type { DefineComponent } from 'vue';

export interface FolderStackProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FolderStack: DefineComponent<FolderStackProps>;

export default FolderStack;
export { FolderStack };
