import { SvelteComponent } from 'svelte';

export interface ArrowUpCircleDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUpCircleDashed extends SvelteComponent<ArrowUpCircleDashedProps> {}
