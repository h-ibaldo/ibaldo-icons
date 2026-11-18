import { SvelteComponent } from 'svelte';

export interface EjectDownCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EjectDownCircle extends SvelteComponent<EjectDownCircleProps> {}
