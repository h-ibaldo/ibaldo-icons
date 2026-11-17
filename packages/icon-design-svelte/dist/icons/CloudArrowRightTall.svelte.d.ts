import { SvelteComponent } from 'svelte';

export interface CloudArrowRightTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudArrowRightTall extends SvelteComponent<CloudArrowRightTallProps> {}
