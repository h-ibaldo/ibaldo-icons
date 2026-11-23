import type { DefineComponent } from 'vue';

export interface StampProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Stamp: DefineComponent<StampProps>;

export default Stamp;
export { Stamp };
