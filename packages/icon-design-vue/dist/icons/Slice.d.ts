import type { DefineComponent } from 'vue';

export interface SliceProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Slice: DefineComponent<SliceProps>;

export default Slice;
export { Slice };
