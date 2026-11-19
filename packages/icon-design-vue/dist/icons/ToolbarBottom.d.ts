import type { DefineComponent } from 'vue';

export interface ToolbarBottomProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ToolbarBottom: DefineComponent<ToolbarBottomProps>;

export default ToolbarBottom;
export { ToolbarBottom };
