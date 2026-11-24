import { SvelteComponent } from 'svelte';

export interface AtAlertBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtAlertBoxy extends SvelteComponent<AtAlertBoxyProps> {}
