import { SvelteComponent } from 'svelte';

export interface FlagOffWavyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FlagOffWavy extends SvelteComponent<FlagOffWavyProps> {}
