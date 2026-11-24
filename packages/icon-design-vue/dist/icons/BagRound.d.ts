import type { DefineComponent } from 'vue';

export interface BagRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BagRound: DefineComponent<BagRoundProps>;

export default BagRound;
export { BagRound };
