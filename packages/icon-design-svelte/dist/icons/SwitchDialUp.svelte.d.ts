import { SvelteComponent } from 'svelte';

export interface SwitchDialUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwitchDialUp extends SvelteComponent<SwitchDialUpProps> {}
