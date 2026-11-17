import { SvelteComponent } from 'svelte';

export interface LoginProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Login extends SvelteComponent<LoginProps> {}
