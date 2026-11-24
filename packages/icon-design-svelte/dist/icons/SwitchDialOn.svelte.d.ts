import { SvelteComponent } from 'svelte';

export interface SwitchDialOnProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwitchDialOn extends SvelteComponent<SwitchDialOnProps> {}
