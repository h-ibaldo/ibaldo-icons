import { SvelteComponent } from 'svelte';

export interface CloudAlertTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudAlertTall extends SvelteComponent<CloudAlertTallProps> {}
