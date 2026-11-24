import { SvelteComponent } from 'svelte';

export interface CloudOffRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudOffRound extends SvelteComponent<CloudOffRoundProps> {}
