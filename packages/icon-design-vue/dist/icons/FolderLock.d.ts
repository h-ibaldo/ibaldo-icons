import type { DefineComponent } from 'vue';

export interface FolderLockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FolderLock: DefineComponent<FolderLockProps>;

export default FolderLock;
export { FolderLock };
