import type { DefineComponent } from 'vue';

export interface WarningOffRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WarningOffRound: DefineComponent<WarningOffRoundProps>;

export default WarningOffRound;
export { WarningOffRound };
