import { SvelteComponent } from 'svelte';

export interface RouterAntennaLockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RouterAntennaLock extends SvelteComponent<RouterAntennaLockProps> {}
