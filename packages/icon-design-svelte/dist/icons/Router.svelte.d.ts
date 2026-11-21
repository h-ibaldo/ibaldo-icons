import { SvelteComponent } from 'svelte';

export interface RouterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Router extends SvelteComponent<RouterProps> {}
