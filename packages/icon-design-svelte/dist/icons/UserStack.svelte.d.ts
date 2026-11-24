import { SvelteComponent } from 'svelte';

export interface UserStackProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserStack extends SvelteComponent<UserStackProps> {}
