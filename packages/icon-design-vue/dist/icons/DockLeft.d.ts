import type { DefineComponent } from 'vue';

export interface DockLeftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DockLeft: DefineComponent<DockLeftProps>;

export default DockLeft;
export { DockLeft };
