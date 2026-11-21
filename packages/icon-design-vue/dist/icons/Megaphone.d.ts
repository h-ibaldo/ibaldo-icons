import type { DefineComponent } from 'vue';

export interface MegaphoneProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Megaphone: DefineComponent<MegaphoneProps>;

export default Megaphone;
export { Megaphone };
