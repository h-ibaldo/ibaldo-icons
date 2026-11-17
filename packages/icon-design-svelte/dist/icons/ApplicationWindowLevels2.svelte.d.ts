import { SvelteComponent } from 'svelte';

export interface ApplicationWindowLevels2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindowLevels2 extends SvelteComponent<ApplicationWindowLevels2Props> {}
