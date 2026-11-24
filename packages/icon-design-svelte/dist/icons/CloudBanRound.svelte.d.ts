import { SvelteComponent } from 'svelte';

export interface CloudBanRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudBanRound extends SvelteComponent<CloudBanRoundProps> {}
