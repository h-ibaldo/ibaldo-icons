import { SvelteComponent } from 'svelte';

export interface FunnelFilterMailProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FunnelFilterMail extends SvelteComponent<FunnelFilterMailProps> {}
