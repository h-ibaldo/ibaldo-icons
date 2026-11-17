import { SvelteComponent } from 'svelte';

export interface Bell5ExclamationProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell5Exclamation extends SvelteComponent<Bell5ExclamationProps> {}
