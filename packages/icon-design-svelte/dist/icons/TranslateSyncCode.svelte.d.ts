import { SvelteComponent } from 'svelte';

export interface TranslateSyncCodeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TranslateSyncCode extends SvelteComponent<TranslateSyncCodeProps> {}
