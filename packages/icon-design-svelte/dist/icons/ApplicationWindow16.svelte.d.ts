import { SvelteComponent } from 'svelte';

export interface ApplicationWindow16Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindow16 extends SvelteComponent<ApplicationWindow16Props> {}
