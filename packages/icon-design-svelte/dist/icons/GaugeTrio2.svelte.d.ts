import { SvelteComponent } from 'svelte';

export interface GaugeTrio2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GaugeTrio2 extends SvelteComponent<GaugeTrio2Props> {}
