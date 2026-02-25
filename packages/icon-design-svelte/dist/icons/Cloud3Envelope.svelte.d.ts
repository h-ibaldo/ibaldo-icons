import { SvelteComponent } from 'svelte';

export interface Cloud3EnvelopeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud3Envelope extends SvelteComponent<Cloud3EnvelopeProps> {}
