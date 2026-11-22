import type { DefineComponent } from 'vue';

export interface DockCornerOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DockCornerOff: DefineComponent<DockCornerOffProps>;

export default DockCornerOff;
export { DockCornerOff };
