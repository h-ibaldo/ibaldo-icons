import { SvelteComponent } from 'svelte';

export interface ApplicationWindowPlus1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindowPlus1 extends SvelteComponent<ApplicationWindowPlus1Props> {}
