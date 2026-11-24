import type { DefineComponent } from 'vue';

export interface FolderLinkProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FolderLink: DefineComponent<FolderLinkProps>;

export default FolderLink;
export { FolderLink };
