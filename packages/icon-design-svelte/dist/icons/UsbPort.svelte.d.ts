import { SvelteComponent } from 'svelte';

export interface UsbPortProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UsbPort extends SvelteComponent<UsbPortProps> {}
