import { SvelteComponent } from 'svelte';

export interface PaperPlaneNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperPlaneNotch extends SvelteComponent<PaperPlaneNotchProps> {}
