import { SvelteComponent } from 'svelte';

export interface ApplicationWindow2CircleDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ApplicationWindow2CircleDots extends SvelteComponent<ApplicationWindow2CircleDotsProps> {}
