import type { DefineComponent } from 'vue';

export interface FolderPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FolderPlus: DefineComponent<FolderPlusProps>;

export default FolderPlus;
export { FolderPlus };
