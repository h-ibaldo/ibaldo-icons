import type { DefineComponent } from 'vue';

export interface LassoWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LassoWide: DefineComponent<LassoWideProps>;

export default LassoWide;
export { LassoWide };
