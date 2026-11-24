import { SvelteComponent } from 'svelte';

export interface SavePlusCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SavePlusCircle extends SvelteComponent<SavePlusCircleProps> {}
