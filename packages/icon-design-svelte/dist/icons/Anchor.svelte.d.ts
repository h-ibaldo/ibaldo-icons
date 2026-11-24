import { SvelteComponent } from 'svelte';

export interface AnchorProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Anchor extends SvelteComponent<AnchorProps> {}
