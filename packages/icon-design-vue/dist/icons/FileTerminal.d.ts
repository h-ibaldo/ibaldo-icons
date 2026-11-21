import type { DefineComponent } from 'vue';

export interface FileTerminalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const FileTerminal: DefineComponent<FileTerminalProps>;

export default FileTerminal;
export { FileTerminal };
