import { SvelteComponent } from 'svelte';

export interface CloudTriangleRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudTriangleRound extends SvelteComponent<CloudTriangleRoundProps> {}
