import { SvelteComponent } from 'svelte';

export interface CheckMarkSolidGeometric2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckMarkSolidGeometric2 extends SvelteComponent<CheckMarkSolidGeometric2Props> {}
