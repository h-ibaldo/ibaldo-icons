import { SvelteComponent } from 'svelte';

export interface BoxFrontSlotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BoxFrontSlot extends SvelteComponent<BoxFrontSlotProps> {}
