import { SvelteComponent } from 'svelte';

export interface ApplicationWindow4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindow4 extends SvelteComponent<ApplicationWindow4Props> {}
