import { SvelteComponent } from 'svelte';

export interface Tab3CloseCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab3CloseCircle extends SvelteComponent<Tab3CloseCircleProps> {}
