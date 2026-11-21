import { SvelteComponent } from 'svelte';

export interface PaperPlaneUpRightNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperPlaneUpRightNotch extends SvelteComponent<PaperPlaneUpRightNotchProps> {}
