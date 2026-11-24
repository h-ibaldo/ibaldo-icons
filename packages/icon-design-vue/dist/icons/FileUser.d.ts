import type { DefineComponent } from 'vue';

export interface FileUserProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileUser: DefineComponent<FileUserProps>;

export default FileUser;
export { FileUser };
