import { SvelteComponent } from 'svelte';

export interface SirenAlertProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SirenAlert extends SvelteComponent<SirenAlertProps> {}
