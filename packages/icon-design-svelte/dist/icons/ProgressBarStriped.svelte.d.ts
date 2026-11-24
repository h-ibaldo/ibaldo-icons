import { SvelteComponent } from 'svelte';

export interface ProgressBarStripedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ProgressBarStriped extends SvelteComponent<ProgressBarStripedProps> {}
