import type { DefineComponent } from 'vue';

export interface FileTerminalCutProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileTerminalCut: DefineComponent<FileTerminalCutProps>;

export default FileTerminalCut;
export { FileTerminalCut };
