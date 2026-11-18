import { SvelteComponent } from 'svelte';

export interface DeskUserProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DeskUser extends SvelteComponent<DeskUserProps> {}
