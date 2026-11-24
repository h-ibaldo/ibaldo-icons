import type { DefineComponent } from 'vue';

export interface DockBottomProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DockBottom: DefineComponent<DockBottomProps>;

export default DockBottom;
export { DockBottom };
