import { SvelteComponent } from 'svelte';

export interface PaperPlaneProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperPlane extends SvelteComponent<PaperPlaneProps> {}
