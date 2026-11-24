import type { DefineComponent } from 'vue';

export interface DockFillProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DockFill: DefineComponent<DockFillProps>;

export default DockFill;
export { DockFill };
