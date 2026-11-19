import type { DefineComponent } from 'vue';

export interface WarningRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WarningRound: DefineComponent<WarningRoundProps>;

export default WarningRound;
export { WarningRound };
