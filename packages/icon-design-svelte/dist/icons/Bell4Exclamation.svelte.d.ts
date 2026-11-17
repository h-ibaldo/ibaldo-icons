import { SvelteComponent } from 'svelte';

export interface Bell4ExclamationProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell4Exclamation extends SvelteComponent<Bell4ExclamationProps> {}
