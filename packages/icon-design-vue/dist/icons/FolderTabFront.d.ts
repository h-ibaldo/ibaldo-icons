import type { DefineComponent } from 'vue';

export interface FolderTabFrontProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FolderTabFront: DefineComponent<FolderTabFrontProps>;

export default FolderTabFront;
export { FolderTabFront };
