import type { DefineComponent } from 'vue';

export interface BoxLidClaspProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BoxLidClasp: DefineComponent<BoxLidClaspProps>;

export default BoxLidClasp;
export { BoxLidClasp };
