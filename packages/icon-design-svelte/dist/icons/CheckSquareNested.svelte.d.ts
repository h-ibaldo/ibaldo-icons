import { SvelteComponent } from 'svelte';

export interface CheckSquareNestedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckSquareNested extends SvelteComponent<CheckSquareNestedProps> {}
