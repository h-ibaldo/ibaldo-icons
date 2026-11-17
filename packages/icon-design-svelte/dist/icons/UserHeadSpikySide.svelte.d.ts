import { SvelteComponent } from 'svelte';

export interface UserHeadSpikySideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHeadSpikySide extends SvelteComponent<UserHeadSpikySideProps> {}
