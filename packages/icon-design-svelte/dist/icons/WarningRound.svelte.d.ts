import { SvelteComponent } from 'svelte';

export interface WarningRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WarningRound extends SvelteComponent<WarningRoundProps> {}
