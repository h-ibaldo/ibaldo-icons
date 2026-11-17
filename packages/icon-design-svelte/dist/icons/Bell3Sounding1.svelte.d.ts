import { SvelteComponent } from 'svelte';

export interface Bell3Sounding1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell3Sounding1 extends SvelteComponent<Bell3Sounding1Props> {}
