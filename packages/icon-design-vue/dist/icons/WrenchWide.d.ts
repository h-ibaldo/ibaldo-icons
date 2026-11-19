import type { DefineComponent } from 'vue';

export interface WrenchWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WrenchWide: DefineComponent<WrenchWideProps>;

export default WrenchWide;
export { WrenchWide };
