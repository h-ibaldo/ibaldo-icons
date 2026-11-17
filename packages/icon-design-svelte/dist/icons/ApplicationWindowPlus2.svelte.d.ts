import { SvelteComponent } from 'svelte';

export interface ApplicationWindowPlus2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindowPlus2 extends SvelteComponent<ApplicationWindowPlus2Props> {}
