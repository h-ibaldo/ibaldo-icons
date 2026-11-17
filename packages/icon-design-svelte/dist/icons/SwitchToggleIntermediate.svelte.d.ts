import { SvelteComponent } from 'svelte';

export interface SwitchToggleIntermediateProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwitchToggleIntermediate extends SvelteComponent<SwitchToggleIntermediateProps> {}
