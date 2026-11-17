import { SvelteComponent } from 'svelte';

export interface ApplicationWindowLevels3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindowLevels3 extends SvelteComponent<ApplicationWindowLevels3Props> {}
