import type { DefineComponent } from 'vue';

export interface PencilUnderlineTipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PencilUnderlineTip: DefineComponent<PencilUnderlineTipProps>;

export default PencilUnderlineTip;
export { PencilUnderlineTip };
