import { SvelteComponent } from 'svelte';

export interface SwitchDialOnHandleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwitchDialOnHandle extends SvelteComponent<SwitchDialOnHandleProps> {}
