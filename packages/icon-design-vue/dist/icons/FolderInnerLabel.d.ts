import type { DefineComponent } from 'vue';

export interface FolderInnerLabelProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FolderInnerLabel: DefineComponent<FolderInnerLabelProps>;

export default FolderInnerLabel;
export { FolderInnerLabel };
