import { SvelteComponent } from 'svelte';

export interface EjectDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EjectDown extends SvelteComponent<EjectDownProps> {}
