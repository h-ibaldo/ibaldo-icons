import { SvelteComponent } from 'svelte';

export interface CloudRefreshCornerRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudRefreshCornerRound extends SvelteComponent<CloudRefreshCornerRoundProps> {}
