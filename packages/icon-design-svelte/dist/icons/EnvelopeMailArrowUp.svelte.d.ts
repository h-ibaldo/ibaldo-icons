import { SvelteComponent } from 'svelte';

export interface EnvelopeMailArrowUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EnvelopeMailArrowUp extends SvelteComponent<EnvelopeMailArrowUpProps> {}
