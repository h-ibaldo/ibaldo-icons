import type { DefineComponent } from 'vue';

export interface FileSettingsPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileSettingsPlain: DefineComponent<FileSettingsPlainProps>;

export default FileSettingsPlain;
export { FileSettingsPlain };
