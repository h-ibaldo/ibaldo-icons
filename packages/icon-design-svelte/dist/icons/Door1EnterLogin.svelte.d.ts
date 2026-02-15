import { SvelteComponent } from 'svelte';

export interface Door1EnterLoginProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Door1EnterLogin extends SvelteComponent<Door1EnterLoginProps> {}
