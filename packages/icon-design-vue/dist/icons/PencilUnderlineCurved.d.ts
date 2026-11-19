import type { DefineComponent } from 'vue';

export interface PencilUnderlineCurvedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PencilUnderlineCurved: DefineComponent<PencilUnderlineCurvedProps>;

export default PencilUnderlineCurved;
export { PencilUnderlineCurved };
