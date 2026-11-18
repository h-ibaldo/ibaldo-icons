import { SvelteComponent } from 'svelte';

export interface EjectCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EjectCircle extends SvelteComponent<EjectCircleProps> {}
