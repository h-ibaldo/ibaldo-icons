import { SvelteComponent } from 'svelte';

export interface SwitchToggleOnStripesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwitchToggleOnStripes extends SvelteComponent<SwitchToggleOnStripesProps> {}
