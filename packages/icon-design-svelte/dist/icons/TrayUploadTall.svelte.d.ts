import { SvelteComponent } from 'svelte';

export interface TrayUploadTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrayUploadTall extends SvelteComponent<TrayUploadTallProps> {}
