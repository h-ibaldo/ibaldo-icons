import { SvelteComponent } from 'svelte';

export interface LightningQuickMode3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LightningQuickMode3 extends SvelteComponent<LightningQuickMode3Props> {}
