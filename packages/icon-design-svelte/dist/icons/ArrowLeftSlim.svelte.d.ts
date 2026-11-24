import { SvelteComponent } from 'svelte';

export interface ArrowLeftSlimProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowLeftSlim extends SvelteComponent<ArrowLeftSlimProps> {}
