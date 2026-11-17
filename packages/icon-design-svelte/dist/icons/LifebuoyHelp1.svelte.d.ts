import { SvelteComponent } from 'svelte';

export interface LifebuoyHelp1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LifebuoyHelp1 extends SvelteComponent<LifebuoyHelp1Props> {}
