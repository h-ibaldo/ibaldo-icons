import type { DefineComponent } from 'vue';

export interface ToolboxRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ToolboxRound: DefineComponent<ToolboxRoundProps>;

export default ToolboxRound;
export { ToolboxRound };
