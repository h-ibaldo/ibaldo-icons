import { SvelteComponent } from 'svelte';

export interface CloudHappyRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudHappyRound extends SvelteComponent<CloudHappyRoundProps> {}
