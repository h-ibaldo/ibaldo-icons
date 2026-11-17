import { SvelteComponent } from 'svelte';

export interface LifebuoyHelp2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LifebuoyHelp2 extends SvelteComponent<LifebuoyHelp2Props> {}
