import { SvelteComponent } from 'svelte';

export interface Tab2CloseCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab2CloseCircle extends SvelteComponent<Tab2CloseCircleProps> {}
