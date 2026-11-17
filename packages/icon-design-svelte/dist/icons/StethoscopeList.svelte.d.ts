import { SvelteComponent } from 'svelte';

export interface StethoscopeListProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StethoscopeList extends SvelteComponent<StethoscopeListProps> {}
