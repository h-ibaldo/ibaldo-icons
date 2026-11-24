import { SvelteComponent } from 'svelte';

export interface DraftingCompassArcProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DraftingCompassArc extends SvelteComponent<DraftingCompassArcProps> {}
