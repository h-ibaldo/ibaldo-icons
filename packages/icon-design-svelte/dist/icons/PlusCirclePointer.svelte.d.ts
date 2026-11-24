import { SvelteComponent } from 'svelte';

export interface PlusCirclePointerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PlusCirclePointer extends SvelteComponent<PlusCirclePointerProps> {}
