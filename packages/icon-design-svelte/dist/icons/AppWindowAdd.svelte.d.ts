import { SvelteComponent } from 'svelte';

export interface AppWindowAddProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AppWindowAdd extends SvelteComponent<AppWindowAddProps> {}
