import { SvelteComponent } from 'svelte';

export interface ApplicationWindow1Bulb1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindow1Bulb1 extends SvelteComponent<ApplicationWindow1Bulb1Props> {}
