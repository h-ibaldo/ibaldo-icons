import { SvelteComponent } from 'svelte';

export interface ApplicationWindow5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindow5 extends SvelteComponent<ApplicationWindow5Props> {}
