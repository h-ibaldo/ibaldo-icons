import { SvelteComponent } from 'svelte';

export interface WarningOffRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WarningOffRound extends SvelteComponent<WarningOffRoundProps> {}
