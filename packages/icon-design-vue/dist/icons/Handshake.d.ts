import type { DefineComponent } from 'vue';

export interface HandshakeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Handshake: DefineComponent<HandshakeProps>;

export default Handshake;
export { Handshake };
