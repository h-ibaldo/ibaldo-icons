import type { DefineComponent } from 'vue';

export interface FolderGitProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FolderGit: DefineComponent<FolderGitProps>;

export default FolderGit;
export { FolderGit };
