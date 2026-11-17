import { SvelteComponent } from 'svelte';

export interface LifebuoyHelp4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LifebuoyHelp4 extends SvelteComponent<LifebuoyHelp4Props> {}
