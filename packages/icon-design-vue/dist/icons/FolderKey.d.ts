import type { DefineComponent } from 'vue';

export interface FolderKeyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FolderKey: DefineComponent<FolderKeyProps>;

export default FolderKey;
export { FolderKey };
