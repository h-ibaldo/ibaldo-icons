import { SvelteComponent } from 'svelte';

export interface EnvelopeMailEmailProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EnvelopeMailEmail extends SvelteComponent<EnvelopeMailEmailProps> {}
