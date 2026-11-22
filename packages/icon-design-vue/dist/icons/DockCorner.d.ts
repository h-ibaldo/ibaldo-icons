import type { DefineComponent } from 'vue';

export interface DockCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DockCorner: DefineComponent<DockCornerProps>;

export default DockCorner;
export { DockCorner };
