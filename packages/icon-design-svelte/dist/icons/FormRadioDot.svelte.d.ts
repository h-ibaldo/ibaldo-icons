import { SvelteComponent } from 'svelte';

export interface FormRadioDotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FormRadioDot extends SvelteComponent<FormRadioDotProps> {}
