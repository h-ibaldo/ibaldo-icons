import { SvelteComponent } from 'svelte';

export interface AddPlusCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AddPlusCircle extends SvelteComponent<AddPlusCircleProps> {}
