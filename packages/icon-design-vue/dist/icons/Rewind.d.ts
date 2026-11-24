import type { DefineComponent } from 'vue';

export interface RewindProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Rewind: DefineComponent<RewindProps>;

export default Rewind;
export { Rewind };
