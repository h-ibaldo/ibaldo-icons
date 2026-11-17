import { SvelteComponent } from 'svelte';

export interface EnvelopeSearch2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EnvelopeSearch2 extends SvelteComponent<EnvelopeSearch2Props> {}
