import { SvelteComponent } from 'svelte';

export interface LifebuoyRopeLongProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LifebuoyRopeLong extends SvelteComponent<LifebuoyRopeLongProps> {}
