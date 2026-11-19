import { SvelteComponent } from 'svelte';

export interface ArrowDownLeftSlimProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowDownLeftSlim extends SvelteComponent<ArrowDownLeftSlimProps> {}
