import type { DefineComponent } from 'vue';

export interface BoltProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Bolt: DefineComponent<BoltProps>;

export default Bolt;
export { Bolt };
