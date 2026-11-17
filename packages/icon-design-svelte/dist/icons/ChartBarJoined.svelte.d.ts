import { SvelteComponent } from 'svelte';

export interface ChartBarJoinedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarJoined extends SvelteComponent<ChartBarJoinedProps> {}
