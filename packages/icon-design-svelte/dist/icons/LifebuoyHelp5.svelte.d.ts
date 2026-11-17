import { SvelteComponent } from 'svelte';

export interface LifebuoyHelp5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LifebuoyHelp5 extends SvelteComponent<LifebuoyHelp5Props> {}
