import { SvelteComponent } from 'svelte';

export interface CloudSendRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudSendRound extends SvelteComponent<CloudSendRoundProps> {}
