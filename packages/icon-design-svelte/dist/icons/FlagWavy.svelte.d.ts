import { SvelteComponent } from 'svelte';

export interface FlagWavyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FlagWavy extends SvelteComponent<FlagWavyProps> {}
