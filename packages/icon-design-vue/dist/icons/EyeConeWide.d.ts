import type { DefineComponent } from 'vue';

export interface EyeConeWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const EyeConeWide: DefineComponent<EyeConeWideProps>;

export default EyeConeWide;
export { EyeConeWide };
