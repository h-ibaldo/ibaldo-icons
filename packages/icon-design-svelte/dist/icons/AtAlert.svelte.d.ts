import { SvelteComponent } from 'svelte';

export interface AtAlertProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtAlert extends SvelteComponent<AtAlertProps> {}
