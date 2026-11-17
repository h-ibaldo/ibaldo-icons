import { SvelteComponent } from 'svelte';

export interface UserFaceLongWavyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserFaceLongWavy extends SvelteComponent<UserFaceLongWavyProps> {}
