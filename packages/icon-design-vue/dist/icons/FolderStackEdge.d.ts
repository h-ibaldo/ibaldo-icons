import type { DefineComponent } from 'vue';

export interface FolderStackEdgeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FolderStackEdge: DefineComponent<FolderStackEdgeProps>;

export default FolderStackEdge;
export { FolderStackEdge };
