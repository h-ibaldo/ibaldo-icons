import type { DefineComponent } from 'vue';

export interface LassoProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Lasso: DefineComponent<LassoProps>;

export default Lasso;
export { Lasso };
