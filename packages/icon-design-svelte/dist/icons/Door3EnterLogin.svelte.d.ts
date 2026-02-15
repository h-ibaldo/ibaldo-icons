import { SvelteComponent } from 'svelte';

export interface Door3EnterLoginProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Door3EnterLogin extends SvelteComponent<Door3EnterLoginProps> {}
