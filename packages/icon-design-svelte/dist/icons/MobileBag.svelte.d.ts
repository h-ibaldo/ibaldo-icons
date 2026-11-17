import { SvelteComponent } from 'svelte';

export interface MobileBagProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MobileBag extends SvelteComponent<MobileBagProps> {}
