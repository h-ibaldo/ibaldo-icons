import { SvelteComponent } from 'svelte';

export interface DraftingCompassProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DraftingCompass extends SvelteComponent<DraftingCompassProps> {}
