import { SvelteComponent } from 'svelte';

export interface SpellCheckWavyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SpellCheckWavy extends SvelteComponent<SpellCheckWavyProps> {}
