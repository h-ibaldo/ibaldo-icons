import type { DefineComponent } from 'vue';

export interface WrenchRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WrenchRound: DefineComponent<WrenchRoundProps>;

export default WrenchRound;
export { WrenchRound };
