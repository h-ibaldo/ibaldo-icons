import type { DefineComponent } from 'vue';

export interface Wrench2Props {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Wrench2: DefineComponent<Wrench2Props>;

export default Wrench2;
export { Wrench2 };
