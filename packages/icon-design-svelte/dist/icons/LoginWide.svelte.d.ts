import { SvelteComponent } from 'svelte';

export interface LoginWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LoginWide extends SvelteComponent<LoginWideProps> {}
