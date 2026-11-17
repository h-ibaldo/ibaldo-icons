import { SvelteComponent } from 'svelte';

export interface LogoutWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LogoutWide extends SvelteComponent<LogoutWideProps> {}
