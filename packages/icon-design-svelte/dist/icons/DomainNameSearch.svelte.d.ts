import { SvelteComponent } from 'svelte';

export interface DomainNameSearchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DomainNameSearch extends SvelteComponent<DomainNameSearchProps> {}
