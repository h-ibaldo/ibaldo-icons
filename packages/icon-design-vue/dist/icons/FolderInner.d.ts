import type { DefineComponent } from 'vue';

export interface FolderInnerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FolderInner: DefineComponent<FolderInnerProps>;

export default FolderInner;
export { FolderInner };
