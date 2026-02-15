import { SvelteComponent } from 'svelte';

export interface AddPlusSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AddPlusSquare extends SvelteComponent<AddPlusSquareProps> {}
