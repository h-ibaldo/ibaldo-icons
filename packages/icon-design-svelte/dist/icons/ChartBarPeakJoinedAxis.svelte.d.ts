import { SvelteComponent } from 'svelte';

export interface ChartBarPeakJoinedAxisProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarPeakJoinedAxis extends SvelteComponent<ChartBarPeakJoinedAxisProps> {}
