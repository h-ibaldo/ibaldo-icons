import type { DefineComponent } from 'vue';

export interface FileSettingsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileSettings: DefineComponent<FileSettingsProps>;

export default FileSettings;
export { FileSettings };
