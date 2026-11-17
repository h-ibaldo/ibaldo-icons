import { SvelteComponent } from 'svelte';

export interface EjectDownThickProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EjectDownThick extends SvelteComponent<EjectDownThickProps> {}
