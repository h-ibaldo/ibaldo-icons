import { SvelteComponent } from 'svelte';

export interface ApplicationWindowAdd2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindowAdd2 extends SvelteComponent<ApplicationWindowAdd2Props> {}
