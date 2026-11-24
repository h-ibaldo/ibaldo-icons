import type { DefineComponent } from 'vue';

export interface FolderPerspectiveProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FolderPerspective: DefineComponent<FolderPerspectiveProps>;

export default FolderPerspective;
export { FolderPerspective };
