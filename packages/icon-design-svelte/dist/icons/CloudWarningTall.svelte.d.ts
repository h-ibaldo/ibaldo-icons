import { SvelteComponent } from 'svelte';

export interface CloudWarningTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudWarningTall extends SvelteComponent<CloudWarningTallProps> {}
