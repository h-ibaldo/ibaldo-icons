import type { DefineComponent } from 'vue';

export interface FileMailProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileMail: DefineComponent<FileMailProps>;

export default FileMail;
export { FileMail };
