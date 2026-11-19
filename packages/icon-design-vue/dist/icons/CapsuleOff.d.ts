import type { DefineComponent } from 'vue';

export interface CapsuleOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CapsuleOff: DefineComponent<CapsuleOffProps>;

export default CapsuleOff;
export { CapsuleOff };
