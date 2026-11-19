import type { DefineComponent } from 'vue';

export interface BrowserArmchairRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BrowserArmchairRound: DefineComponent<BrowserArmchairRoundProps>;

export default BrowserArmchairRound;
export { BrowserArmchairRound };
