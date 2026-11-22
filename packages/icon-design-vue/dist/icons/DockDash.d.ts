import type { DefineComponent } from 'vue';

export interface DockDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DockDash: DefineComponent<DockDashProps>;

export default DockDash;
export { DockDash };
