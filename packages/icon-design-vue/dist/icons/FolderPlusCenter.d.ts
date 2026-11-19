import type { DefineComponent } from 'vue';

export interface FolderPlusCenterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FolderPlusCenter: DefineComponent<FolderPlusCenterProps>;

export default FolderPlusCenter;
export { FolderPlusCenter };
