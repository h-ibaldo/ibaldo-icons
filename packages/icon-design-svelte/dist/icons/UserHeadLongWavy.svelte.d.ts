import { SvelteComponent } from 'svelte';

export interface UserHeadLongWavyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHeadLongWavy extends SvelteComponent<UserHeadLongWavyProps> {}
