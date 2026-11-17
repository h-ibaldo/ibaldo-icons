import { SvelteComponent } from 'svelte';

export interface SubmitOpenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SubmitOpen extends SvelteComponent<SubmitOpenProps> {}
