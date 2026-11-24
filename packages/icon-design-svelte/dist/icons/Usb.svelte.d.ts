import { SvelteComponent } from 'svelte';

export interface UsbProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Usb extends SvelteComponent<UsbProps> {}
