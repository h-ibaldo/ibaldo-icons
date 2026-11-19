import type { DefineComponent } from 'vue';

export interface CakeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Cake: DefineComponent<CakeProps>;

export default Cake;
export { Cake };
