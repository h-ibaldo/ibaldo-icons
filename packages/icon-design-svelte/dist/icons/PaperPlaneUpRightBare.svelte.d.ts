import { SvelteComponent } from 'svelte';

export interface PaperPlaneUpRightBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperPlaneUpRightBare extends SvelteComponent<PaperPlaneUpRightBareProps> {}
