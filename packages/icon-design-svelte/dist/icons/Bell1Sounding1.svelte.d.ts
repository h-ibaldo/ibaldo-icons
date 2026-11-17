import { SvelteComponent } from 'svelte';

export interface Bell1Sounding1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell1Sounding1 extends SvelteComponent<Bell1Sounding1Props> {}
