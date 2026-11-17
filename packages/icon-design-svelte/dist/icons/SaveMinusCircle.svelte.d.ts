import { SvelteComponent } from 'svelte';

export interface SaveMinusCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SaveMinusCircle extends SvelteComponent<SaveMinusCircleProps> {}
