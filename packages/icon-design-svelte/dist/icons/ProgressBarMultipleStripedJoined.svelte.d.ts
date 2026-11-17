import { SvelteComponent } from 'svelte';

export interface ProgressBarMultipleStripedJoinedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ProgressBarMultipleStripedJoined extends SvelteComponent<ProgressBarMultipleStripedJoinedProps> {}
