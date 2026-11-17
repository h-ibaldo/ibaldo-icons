import { SvelteComponent } from 'svelte';

export interface EnvelopeSearch1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EnvelopeSearch1 extends SvelteComponent<EnvelopeSearch1Props> {}
