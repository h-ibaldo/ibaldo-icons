import type { DefineComponent } from 'vue';

export interface MegaphoneRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MegaphoneRound: DefineComponent<MegaphoneRoundProps>;

export default MegaphoneRound;
export { MegaphoneRound };
