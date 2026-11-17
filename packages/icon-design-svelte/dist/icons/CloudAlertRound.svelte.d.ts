import { SvelteComponent } from 'svelte';

export interface CloudAlertRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudAlertRound extends SvelteComponent<CloudAlertRoundProps> {}
