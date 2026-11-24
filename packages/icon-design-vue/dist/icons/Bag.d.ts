import type { DefineComponent } from 'vue';

export interface BagProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Bag: DefineComponent<BagProps>;

export default Bag;
export { Bag };
