import { SvelteComponent } from 'svelte';

export interface DomainNameGlobe2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DomainNameGlobe2 extends SvelteComponent<DomainNameGlobe2Props> {}
