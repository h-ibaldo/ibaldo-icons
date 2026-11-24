import { SvelteComponent } from 'svelte';

export interface AwardCheckRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AwardCheckRound extends SvelteComponent<AwardCheckRoundProps> {}
