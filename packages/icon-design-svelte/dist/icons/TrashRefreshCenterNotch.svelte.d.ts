import { SvelteComponent } from 'svelte';

export interface TrashRefreshCenterNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashRefreshCenterNotch extends SvelteComponent<TrashRefreshCenterNotchProps> {}
