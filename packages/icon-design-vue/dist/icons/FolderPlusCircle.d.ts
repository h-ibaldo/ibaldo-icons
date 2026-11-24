import type { DefineComponent } from 'vue';

export interface FolderPlusCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FolderPlusCircle: DefineComponent<FolderPlusCircleProps>;

export default FolderPlusCircle;
export { FolderPlusCircle };
