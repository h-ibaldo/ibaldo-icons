import type { DefineComponent } from 'vue';

export interface AwardRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AwardRound: DefineComponent<AwardRoundProps>;

export default AwardRound;
export { AwardRound };
