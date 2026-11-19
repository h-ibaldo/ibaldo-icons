import type { DefineComponent } from 'vue';

export interface ToolboxAngledProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ToolboxAngled: DefineComponent<ToolboxAngledProps>;

export default ToolboxAngled;
export { ToolboxAngled };
