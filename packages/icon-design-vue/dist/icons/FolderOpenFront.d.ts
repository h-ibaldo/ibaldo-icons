import type { DefineComponent } from 'vue';

export interface FolderOpenFrontProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FolderOpenFront: DefineComponent<FolderOpenFrontProps>;

export default FolderOpenFront;
export { FolderOpenFront };
