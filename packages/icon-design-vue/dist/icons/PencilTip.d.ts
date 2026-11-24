import type { DefineComponent } from 'vue';

export interface PencilTipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PencilTip: DefineComponent<PencilTipProps>;

export default PencilTip;
export { PencilTip };
