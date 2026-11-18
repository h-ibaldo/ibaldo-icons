import { SvelteComponent } from 'svelte';

export interface LinkCheckCircleRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkCheckCircleRound extends SvelteComponent<LinkCheckCircleRoundProps> {}
