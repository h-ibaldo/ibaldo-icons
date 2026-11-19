import type { DefineComponent } from 'vue';

export interface FolderLabelProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FolderLabel: DefineComponent<FolderLabelProps>;

export default FolderLabel;
export { FolderLabel };
