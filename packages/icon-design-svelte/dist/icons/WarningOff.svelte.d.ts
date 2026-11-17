import { SvelteComponent } from 'svelte';

export interface WarningOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WarningOff extends SvelteComponent<WarningOffProps> {}
