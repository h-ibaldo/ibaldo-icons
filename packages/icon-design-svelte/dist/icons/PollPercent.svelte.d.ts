import { SvelteComponent } from 'svelte';

export interface PollPercentProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PollPercent extends SvelteComponent<PollPercentProps> {}
