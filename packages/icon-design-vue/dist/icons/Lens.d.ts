import type { DefineComponent } from 'vue';

export interface LensProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Lens: DefineComponent<LensProps>;

export default Lens;
export { Lens };
