import type { DefineComponent } from 'vue';

export interface PollPercentProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PollPercent: DefineComponent<PollPercentProps>;

export default PollPercent;
export { PollPercent };
