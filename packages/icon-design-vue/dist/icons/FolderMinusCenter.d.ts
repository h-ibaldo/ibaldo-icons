import type { DefineComponent } from 'vue';

export interface FolderMinusCenterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FolderMinusCenter: DefineComponent<FolderMinusCenterProps>;

export default FolderMinusCenter;
export { FolderMinusCenter };
