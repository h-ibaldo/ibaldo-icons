import { SvelteComponent } from 'svelte';

export interface Cloud1EnvelopeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud1Envelope extends SvelteComponent<Cloud1EnvelopeProps> {}
