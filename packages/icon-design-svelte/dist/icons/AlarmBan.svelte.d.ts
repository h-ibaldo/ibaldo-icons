import { SvelteComponent } from 'svelte';

export interface AlarmBanProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlarmBan extends SvelteComponent<AlarmBanProps> {}
