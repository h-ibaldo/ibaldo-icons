import { SvelteComponent } from 'svelte';

export interface OfflinePinCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class OfflinePinCheck extends SvelteComponent<OfflinePinCheckProps> {}
