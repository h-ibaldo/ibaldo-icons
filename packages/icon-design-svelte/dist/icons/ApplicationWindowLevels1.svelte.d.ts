import { SvelteComponent } from 'svelte';

export interface ApplicationWindowLevels1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindowLevels1 extends SvelteComponent<ApplicationWindowLevels1Props> {}
