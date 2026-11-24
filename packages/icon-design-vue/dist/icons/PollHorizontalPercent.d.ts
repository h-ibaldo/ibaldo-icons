import type { DefineComponent } from 'vue';

export interface PollHorizontalPercentProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PollHorizontalPercent: DefineComponent<PollHorizontalPercentProps>;

export default PollHorizontalPercent;
export { PollHorizontalPercent };
