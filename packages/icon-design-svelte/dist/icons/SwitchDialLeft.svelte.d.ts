import { SvelteComponent } from 'svelte';

export interface SwitchDialLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwitchDialLeft extends SvelteComponent<SwitchDialLeftProps> {}
