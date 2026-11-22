import type { DefineComponent } from 'vue';

export interface FolderSearchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FolderSearch: DefineComponent<FolderSearchProps>;

export default FolderSearch;
export { FolderSearch };
