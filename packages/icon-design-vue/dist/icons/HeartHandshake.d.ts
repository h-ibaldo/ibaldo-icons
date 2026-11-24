import type { DefineComponent } from 'vue';

export interface HeartHandshakeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HeartHandshake: DefineComponent<HeartHandshakeProps>;

export default HeartHandshake;
export { HeartHandshake };
