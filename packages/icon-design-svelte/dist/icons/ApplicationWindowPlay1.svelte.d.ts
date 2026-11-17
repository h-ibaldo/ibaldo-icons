import { SvelteComponent } from 'svelte';

export interface ApplicationWindowPlay1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindowPlay1 extends SvelteComponent<ApplicationWindowPlay1Props> {}
