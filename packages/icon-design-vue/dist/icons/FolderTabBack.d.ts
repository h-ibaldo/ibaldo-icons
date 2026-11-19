import type { DefineComponent } from 'vue';

export interface FolderTabBackProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FolderTabBack: DefineComponent<FolderTabBackProps>;

export default FolderTabBack;
export { FolderTabBack };
