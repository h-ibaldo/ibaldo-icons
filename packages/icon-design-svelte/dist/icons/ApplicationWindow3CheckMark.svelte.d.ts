import { SvelteComponent } from 'svelte';

export interface ApplicationWindow3CheckMarkProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindow3CheckMark extends SvelteComponent<ApplicationWindow3CheckMarkProps> {}
