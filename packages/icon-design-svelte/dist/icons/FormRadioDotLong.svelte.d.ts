import { SvelteComponent } from 'svelte';

export interface FormRadioDotLongProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FormRadioDotLong extends SvelteComponent<FormRadioDotLongProps> {}
