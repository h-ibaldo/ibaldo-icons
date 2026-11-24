import { SvelteComponent } from 'svelte';

export interface CloudWarningProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudWarning extends SvelteComponent<CloudWarningProps> {}
