import { SvelteComponent } from 'svelte';

export interface TrayStackXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrayStackX extends SvelteComponent<TrayStackXProps> {}
