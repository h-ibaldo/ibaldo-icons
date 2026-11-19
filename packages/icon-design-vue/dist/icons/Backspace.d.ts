import type { DefineComponent } from 'vue';

export interface BackspaceProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Backspace: DefineComponent<BackspaceProps>;

export default Backspace;
export { Backspace };
