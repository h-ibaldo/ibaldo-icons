import { SvelteComponent } from 'svelte';

export interface FormUserDropProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FormUserDrop extends SvelteComponent<FormUserDropProps> {}
