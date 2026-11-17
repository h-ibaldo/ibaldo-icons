import { SvelteComponent } from 'svelte';

export interface CloudPlusCornerRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudPlusCornerRound extends SvelteComponent<CloudPlusCornerRoundProps> {}
