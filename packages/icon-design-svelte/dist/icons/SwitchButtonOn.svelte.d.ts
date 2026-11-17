import { SvelteComponent } from 'svelte';

export interface SwitchButtonOnProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwitchButtonOn extends SvelteComponent<SwitchButtonOnProps> {}
