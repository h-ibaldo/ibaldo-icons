import type { DefineComponent } from 'vue';

export interface DockHorizontalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DockHorizontal: DefineComponent<DockHorizontalProps>;

export default DockHorizontal;
export { DockHorizontal };
