import { SvelteComponent } from 'svelte';

export interface SwitchToggleButtonIntermediateProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwitchToggleButtonIntermediate extends SvelteComponent<SwitchToggleButtonIntermediateProps> {}
