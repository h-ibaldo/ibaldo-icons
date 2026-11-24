import { SvelteComponent } from 'svelte';

export interface PaperPlaneUpRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperPlaneUpRight extends SvelteComponent<PaperPlaneUpRightProps> {}
