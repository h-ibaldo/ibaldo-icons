import type { DefineComponent } from 'vue';

export interface ProgressBarStripedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ProgressBarStriped: DefineComponent<ProgressBarStripedProps>;

export default ProgressBarStriped;
export { ProgressBarStriped };
