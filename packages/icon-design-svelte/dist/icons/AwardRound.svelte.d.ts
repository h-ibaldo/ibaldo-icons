import { SvelteComponent } from 'svelte';

export interface AwardRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AwardRound extends SvelteComponent<AwardRoundProps> {}
