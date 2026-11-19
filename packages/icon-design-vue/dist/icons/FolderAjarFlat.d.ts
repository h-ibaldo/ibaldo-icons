import type { DefineComponent } from 'vue';

export interface FolderAjarFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FolderAjarFlat: DefineComponent<FolderAjarFlatProps>;

export default FolderAjarFlat;
export { FolderAjarFlat };
