import { SvelteComponent } from 'svelte';

export interface ClockEnvelopeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockEnvelope extends SvelteComponent<ClockEnvelopeProps> {}
