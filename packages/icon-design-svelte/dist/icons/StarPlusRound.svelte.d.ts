import { SvelteComponent } from 'svelte';

export interface StarPlusRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StarPlusRound extends SvelteComponent<StarPlusRoundProps> {}
