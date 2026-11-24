import type { DefineComponent } from 'vue';

export interface FolderHeartProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FolderHeart: DefineComponent<FolderHeartProps>;

export default FolderHeart;
export { FolderHeart };
