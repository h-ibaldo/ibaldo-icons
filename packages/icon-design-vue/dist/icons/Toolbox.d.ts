import type { DefineComponent } from 'vue';

export interface ToolboxProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Toolbox: DefineComponent<ToolboxProps>;

export default Toolbox;
export { Toolbox };
