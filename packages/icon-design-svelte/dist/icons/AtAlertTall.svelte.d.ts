import { SvelteComponent } from 'svelte';

export interface AtAlertTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtAlertTall extends SvelteComponent<AtAlertTallProps> {}
