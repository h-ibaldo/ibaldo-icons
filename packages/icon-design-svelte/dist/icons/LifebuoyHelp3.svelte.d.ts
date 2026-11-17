import { SvelteComponent } from 'svelte';

export interface LifebuoyHelp3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LifebuoyHelp3 extends SvelteComponent<LifebuoyHelp3Props> {}
