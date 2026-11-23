import type { DefineComponent } from 'vue';

export interface EraserRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const EraserRound: DefineComponent<EraserRoundProps>;

export default EraserRound;
export { EraserRound };
