import { SvelteComponent } from 'svelte';

export interface LightningQuickMode1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LightningQuickMode1 extends SvelteComponent<LightningQuickMode1Props> {}
