import { SvelteComponent } from 'svelte';

export interface ChartBarPeakJoinedBaseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarPeakJoinedBase extends SvelteComponent<ChartBarPeakJoinedBaseProps> {}
