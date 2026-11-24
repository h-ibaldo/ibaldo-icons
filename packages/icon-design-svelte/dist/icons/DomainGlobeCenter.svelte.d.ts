import { SvelteComponent } from 'svelte';

export interface DomainGlobeCenterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DomainGlobeCenter extends SvelteComponent<DomainGlobeCenterProps> {}
