import type { DefineComponent } from 'vue';

export interface FileSettingsCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileSettingsCut: DefineComponent<FileSettingsCutProps>;

export default FileSettingsCut;
export { FileSettingsCut };
