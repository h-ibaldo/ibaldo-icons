import { SvelteComponent } from 'svelte';

export interface LightningQuickModeOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LightningQuickModeOff extends SvelteComponent<LightningQuickModeOffProps> {}
