import { SvelteComponent } from 'svelte';

export interface ApplicationWindowAddProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindowAdd extends SvelteComponent<ApplicationWindowAddProps> {}
