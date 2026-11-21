import type { DefineComponent } from 'vue';

export interface BinaryProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Binary: DefineComponent<BinaryProps>;

export default Binary;
export { Binary };
