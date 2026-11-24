import { SvelteComponent } from 'svelte';

export interface UserCheckWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserCheckWide extends SvelteComponent<UserCheckWideProps> {}
