import { SvelteComponent } from 'svelte';

export interface LoginCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LoginCircle extends SvelteComponent<LoginCircleProps> {}
