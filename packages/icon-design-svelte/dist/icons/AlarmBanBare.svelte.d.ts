import { SvelteComponent } from 'svelte';

export interface AlarmBanBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlarmBanBare extends SvelteComponent<AlarmBanBareProps> {}
