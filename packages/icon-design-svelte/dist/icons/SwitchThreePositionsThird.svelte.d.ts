import { SvelteComponent } from 'svelte';

export interface SwitchThreePositionsThirdProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SwitchThreePositionsThird extends SvelteComponent<SwitchThreePositionsThirdProps> {}
