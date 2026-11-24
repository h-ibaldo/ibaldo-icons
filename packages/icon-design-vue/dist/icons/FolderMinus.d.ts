import type { DefineComponent } from 'vue';

export interface FolderMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FolderMinus: DefineComponent<FolderMinusProps>;

export default FolderMinus;
export { FolderMinus };
