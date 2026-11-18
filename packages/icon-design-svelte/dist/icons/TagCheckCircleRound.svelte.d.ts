import { SvelteComponent } from 'svelte';

export interface TagCheckCircleRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TagCheckCircleRound extends SvelteComponent<TagCheckCircleRoundProps> {}
