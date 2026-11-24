import { SvelteComponent } from 'svelte';

export interface PointerSettingsStraightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PointerSettingsStraight extends SvelteComponent<PointerSettingsStraightProps> {}
