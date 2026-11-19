import type { DefineComponent } from 'vue';

export interface PencilUnderlineDetailedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PencilUnderlineDetailed: DefineComponent<PencilUnderlineDetailedProps>;

export default PencilUnderlineDetailed;
export { PencilUnderlineDetailed };
