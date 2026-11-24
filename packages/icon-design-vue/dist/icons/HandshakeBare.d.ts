import type { DefineComponent } from 'vue';

export interface HandshakeBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HandshakeBare: DefineComponent<HandshakeBareProps>;

export default HandshakeBare;
export { HandshakeBare };
