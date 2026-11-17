import { SvelteComponent } from 'svelte';

export interface ShareSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ShareSquare extends SvelteComponent<ShareSquareProps> {}
