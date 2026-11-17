import { SvelteComponent } from 'svelte';

export interface CheckSquareStack2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckSquareStack2 extends SvelteComponent<CheckSquareStack2Props> {}
