import type { DefineComponent } from 'vue';

export interface FolderCheckCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FolderCheckCircle: DefineComponent<FolderCheckCircleProps>;

export default FolderCheckCircle;
export { FolderCheckCircle };
