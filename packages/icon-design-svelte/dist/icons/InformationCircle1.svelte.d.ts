import { SvelteComponent } from 'svelte';

export interface InformationCircle1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class InformationCircle1 extends SvelteComponent<InformationCircle1Props> {}
