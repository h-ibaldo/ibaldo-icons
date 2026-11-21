import { SvelteComponent } from 'svelte';

export interface MegaphoneRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MegaphoneRound extends SvelteComponent<MegaphoneRoundProps> {}
