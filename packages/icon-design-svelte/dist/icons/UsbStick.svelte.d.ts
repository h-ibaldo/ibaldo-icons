import { SvelteComponent } from 'svelte';

export interface UsbStickProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UsbStick extends SvelteComponent<UsbStickProps> {}
