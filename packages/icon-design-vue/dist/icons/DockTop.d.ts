import type { DefineComponent } from 'vue';

export interface DockTopProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DockTop: DefineComponent<DockTopProps>;

export default DockTop;
export { DockTop };
