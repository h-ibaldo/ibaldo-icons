import { SvelteComponent } from 'svelte';

export interface ChartBarPeakJoinedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarPeakJoined extends SvelteComponent<ChartBarPeakJoinedProps> {}
