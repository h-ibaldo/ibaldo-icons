import type { DefineComponent } from 'vue';

export interface SwatchStackWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SwatchStackWide: DefineComponent<SwatchStackWideProps>;

export default SwatchStackWide;
export { SwatchStackWide };
