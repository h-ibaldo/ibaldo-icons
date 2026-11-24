import { SvelteComponent } from 'svelte';

export interface LifebuoyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lifebuoy extends SvelteComponent<LifebuoyProps> {}
