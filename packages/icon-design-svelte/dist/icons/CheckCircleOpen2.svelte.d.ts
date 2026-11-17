import { SvelteComponent } from 'svelte';

export interface CheckCircleOpen2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckCircleOpen2 extends SvelteComponent<CheckCircleOpen2Props> {}
