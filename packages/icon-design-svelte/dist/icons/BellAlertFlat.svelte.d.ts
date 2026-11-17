import { SvelteComponent } from 'svelte';

export interface BellAlertFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellAlertFlat extends SvelteComponent<BellAlertFlatProps> {}
