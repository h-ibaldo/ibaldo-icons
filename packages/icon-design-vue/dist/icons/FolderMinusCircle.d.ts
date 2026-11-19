import type { DefineComponent } from 'vue';

export interface FolderMinusCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FolderMinusCircle: DefineComponent<FolderMinusCircleProps>;

export default FolderMinusCircle;
export { FolderMinusCircle };
