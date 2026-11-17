import { SvelteComponent } from 'svelte';

export interface LightningQuickMode2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LightningQuickMode2 extends SvelteComponent<LightningQuickMode2Props> {}
