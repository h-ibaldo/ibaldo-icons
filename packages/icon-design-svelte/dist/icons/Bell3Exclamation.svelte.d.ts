import { SvelteComponent } from 'svelte';

export interface Bell3ExclamationProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell3Exclamation extends SvelteComponent<Bell3ExclamationProps> {}
