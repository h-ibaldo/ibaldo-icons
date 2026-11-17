import { SvelteComponent } from 'svelte';

export interface AddCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AddCircle extends SvelteComponent<AddCircleProps> {}
