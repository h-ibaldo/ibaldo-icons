import { SvelteComponent } from 'svelte';

export interface SwitchDialOffHandleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwitchDialOffHandle extends SvelteComponent<SwitchDialOffHandleProps> {}
