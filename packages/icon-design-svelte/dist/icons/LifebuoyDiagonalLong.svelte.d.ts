import { SvelteComponent } from 'svelte';

export interface LifebuoyDiagonalLongProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LifebuoyDiagonalLong extends SvelteComponent<LifebuoyDiagonalLongProps> {}
