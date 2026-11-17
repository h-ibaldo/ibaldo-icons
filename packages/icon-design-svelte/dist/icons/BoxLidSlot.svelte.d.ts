import { SvelteComponent } from 'svelte';

export interface BoxLidSlotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BoxLidSlot extends SvelteComponent<BoxLidSlotProps> {}
