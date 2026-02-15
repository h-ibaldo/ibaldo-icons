import { SvelteComponent } from 'svelte';

export interface ApplicationWindow2LupeSearchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindow2LupeSearch extends SvelteComponent<ApplicationWindow2LupeSearchProps> {}
