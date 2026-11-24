import type { DefineComponent } from 'vue';

export interface FolderXCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FolderXCircle: DefineComponent<FolderXCircleProps>;

export default FolderXCircle;
export { FolderXCircle };
