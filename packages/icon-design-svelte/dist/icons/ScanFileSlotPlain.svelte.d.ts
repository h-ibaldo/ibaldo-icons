import { SvelteComponent } from 'svelte';

export interface ScanFileSlotPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScanFileSlotPlain extends SvelteComponent<ScanFileSlotPlainProps> {}
