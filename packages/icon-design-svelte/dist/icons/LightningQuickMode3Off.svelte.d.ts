import { SvelteComponent } from 'svelte';

export interface LightningQuickMode3OffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LightningQuickMode3Off extends SvelteComponent<LightningQuickMode3OffProps> {}
