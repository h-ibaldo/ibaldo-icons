import type { DefineComponent } from 'vue';

export interface BoxTapeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BoxTape: DefineComponent<BoxTapeProps>;

export default BoxTape;
export { BoxTape };
