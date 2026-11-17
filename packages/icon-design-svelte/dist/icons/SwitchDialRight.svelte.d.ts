import { SvelteComponent } from 'svelte';

export interface SwitchDialRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwitchDialRight extends SvelteComponent<SwitchDialRightProps> {}
