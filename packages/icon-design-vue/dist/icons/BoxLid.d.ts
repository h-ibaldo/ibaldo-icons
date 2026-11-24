import type { DefineComponent } from 'vue';

export interface BoxLidProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BoxLid: DefineComponent<BoxLidProps>;

export default BoxLid;
export { BoxLid };
