import { SvelteComponent } from 'svelte';

export interface AtSign5OneProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSign5One extends SvelteComponent<AtSign5OneProps> {}
