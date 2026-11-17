import { SvelteComponent } from 'svelte';

export interface CloudSquareSignalRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudSquareSignalRound extends SvelteComponent<CloudSquareSignalRoundProps> {}
