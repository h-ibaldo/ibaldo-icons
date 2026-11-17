import { SvelteComponent } from 'svelte';

export interface LightningQuickMode2OffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LightningQuickMode2Off extends SvelteComponent<LightningQuickMode2OffProps> {}
