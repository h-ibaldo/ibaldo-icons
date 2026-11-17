import { SvelteComponent } from 'svelte';

export interface ArrowDownCircleDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowDownCircleDashed extends SvelteComponent<ArrowDownCircleDashedProps> {}
