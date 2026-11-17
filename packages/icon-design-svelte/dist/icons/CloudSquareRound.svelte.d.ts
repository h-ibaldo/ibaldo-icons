import { SvelteComponent } from 'svelte';

export interface CloudSquareRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudSquareRound extends SvelteComponent<CloudSquareRoundProps> {}
