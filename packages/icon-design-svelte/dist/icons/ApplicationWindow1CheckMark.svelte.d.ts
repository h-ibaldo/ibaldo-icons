import { SvelteComponent } from 'svelte';

export interface ApplicationWindow1CheckMarkProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindow1CheckMark extends SvelteComponent<ApplicationWindow1CheckMarkProps> {}
