import type { DefineComponent } from 'vue';

export interface SignatureProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Signature: DefineComponent<SignatureProps>;

export default Signature;
export { Signature };
