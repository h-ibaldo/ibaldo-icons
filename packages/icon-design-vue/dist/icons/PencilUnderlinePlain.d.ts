import type { DefineComponent } from 'vue';

export interface PencilUnderlinePlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PencilUnderlinePlain: DefineComponent<PencilUnderlinePlainProps>;

export default PencilUnderlinePlain;
export { PencilUnderlinePlain };
