import type { DefineComponent } from 'vue';

export interface TerminalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Terminal: DefineComponent<TerminalProps>;

export default Terminal;
export { Terminal };
