import type { DefineComponent } from 'vue';

export interface StethoscopeRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const StethoscopeRound: DefineComponent<StethoscopeRoundProps>;

export default StethoscopeRound;
export { StethoscopeRound };
