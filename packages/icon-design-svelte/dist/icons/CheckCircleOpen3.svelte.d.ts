import { SvelteComponent } from 'svelte';

export interface CheckCircleOpen3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckCircleOpen3 extends SvelteComponent<CheckCircleOpen3Props> {}
