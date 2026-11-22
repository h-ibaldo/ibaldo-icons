import type { DefineComponent } from 'vue';

export interface DockBarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DockBar: DefineComponent<DockBarProps>;

export default DockBar;
export { DockBar };
