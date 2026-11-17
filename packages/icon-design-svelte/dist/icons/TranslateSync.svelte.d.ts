import { SvelteComponent } from 'svelte';

export interface TranslateSyncProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TranslateSync extends SvelteComponent<TranslateSyncProps> {}
