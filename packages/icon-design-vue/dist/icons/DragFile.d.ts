import type { DefineComponent } from 'vue';

export interface DragFileProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DragFile: DefineComponent<DragFileProps>;

export default DragFile;
export { DragFile };
