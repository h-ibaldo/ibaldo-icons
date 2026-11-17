import { SvelteComponent } from 'svelte';

export interface BellAlertProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellAlert extends SvelteComponent<BellAlertProps> {}
