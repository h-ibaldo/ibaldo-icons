import type { DefineComponent } from 'vue';

export interface FileStackLinkProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileStackLink: DefineComponent<FileStackLinkProps>;

export default FileStackLink;
export { FileStackLink };
