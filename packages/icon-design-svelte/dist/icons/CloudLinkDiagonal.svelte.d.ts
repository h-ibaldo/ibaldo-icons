import { SvelteComponent } from 'svelte';

export interface CloudLinkDiagonalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudLinkDiagonal extends SvelteComponent<CloudLinkDiagonalProps> {}
