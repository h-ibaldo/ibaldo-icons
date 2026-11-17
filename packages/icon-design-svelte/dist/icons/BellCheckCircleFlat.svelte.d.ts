import { SvelteComponent } from 'svelte';

export interface BellCheckCircleFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellCheckCircleFlat extends SvelteComponent<BellCheckCircleFlatProps> {}
