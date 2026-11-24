import { SvelteComponent } from 'svelte';

export interface WarningProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Warning extends SvelteComponent<WarningProps> {}
