import type { DefineComponent } from 'vue';

export interface FolderCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FolderCheck: DefineComponent<FolderCheckProps>;

export default FolderCheck;
export { FolderCheck };
