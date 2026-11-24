import { SvelteComponent } from 'svelte';

export interface PollHorizontalPercentProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PollHorizontalPercent extends SvelteComponent<PollHorizontalPercentProps> {}
