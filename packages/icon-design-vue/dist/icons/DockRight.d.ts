import type { DefineComponent } from 'vue';

export interface DockRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DockRight: DefineComponent<DockRightProps>;

export default DockRight;
export { DockRight };
