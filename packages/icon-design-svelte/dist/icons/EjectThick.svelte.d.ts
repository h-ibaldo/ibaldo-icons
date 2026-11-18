import { SvelteComponent } from 'svelte';

export interface EjectThickProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EjectThick extends SvelteComponent<EjectThickProps> {}
