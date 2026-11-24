import { SvelteComponent } from 'svelte';

export interface WebcamRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WebcamRound extends SvelteComponent<WebcamRoundProps> {}
