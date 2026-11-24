import { SvelteComponent } from 'svelte';

export interface BinocularsCompactRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BinocularsCompactRound extends SvelteComponent<BinocularsCompactRoundProps> {}
