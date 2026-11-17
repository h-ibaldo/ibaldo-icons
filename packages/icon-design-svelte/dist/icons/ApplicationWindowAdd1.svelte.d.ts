import { SvelteComponent } from 'svelte';

export interface ApplicationWindowAdd1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindowAdd1 extends SvelteComponent<ApplicationWindowAdd1Props> {}
