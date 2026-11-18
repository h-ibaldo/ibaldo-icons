import { SvelteComponent } from 'svelte';

export interface ScanFileSlotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScanFileSlot extends SvelteComponent<ScanFileSlotProps> {}
