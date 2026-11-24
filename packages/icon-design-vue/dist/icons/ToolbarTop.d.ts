import type { DefineComponent } from 'vue';

export interface ToolbarTopProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ToolbarTop: DefineComponent<ToolbarTopProps>;

export default ToolbarTop;
export { ToolbarTop };
