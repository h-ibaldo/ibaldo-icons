import { SvelteComponent } from 'svelte';

export interface EnvelopeSearch3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EnvelopeSearch3 extends SvelteComponent<EnvelopeSearch3Props> {}
