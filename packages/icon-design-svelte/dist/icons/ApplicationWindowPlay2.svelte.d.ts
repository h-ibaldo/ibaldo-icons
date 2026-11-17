import { SvelteComponent } from 'svelte';

export interface ApplicationWindowPlay2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindowPlay2 extends SvelteComponent<ApplicationWindowPlay2Props> {}
