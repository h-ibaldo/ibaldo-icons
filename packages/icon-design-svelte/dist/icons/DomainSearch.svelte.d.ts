import { SvelteComponent } from 'svelte';

export interface DomainSearchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DomainSearch extends SvelteComponent<DomainSearchProps> {}
