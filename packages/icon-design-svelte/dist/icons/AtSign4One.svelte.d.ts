import { SvelteComponent } from 'svelte';

export interface AtSign4OneProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSign4One extends SvelteComponent<AtSign4OneProps> {}
