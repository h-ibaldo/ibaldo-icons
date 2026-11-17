import { SvelteComponent } from 'svelte';

export interface DomainNameGlobe1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DomainNameGlobe1 extends SvelteComponent<DomainNameGlobe1Props> {}
