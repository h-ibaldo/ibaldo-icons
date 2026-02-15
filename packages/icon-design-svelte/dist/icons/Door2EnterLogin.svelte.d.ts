import { SvelteComponent } from 'svelte';

export interface Door2EnterLoginProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Door2EnterLogin extends SvelteComponent<Door2EnterLoginProps> {}
