import { SvelteComponent } from 'svelte';

export interface FormLockDropProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FormLockDrop extends SvelteComponent<FormLockDropProps> {}
