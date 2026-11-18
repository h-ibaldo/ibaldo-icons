import { SvelteComponent } from 'svelte';

export interface AlarmMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlarmMinus extends SvelteComponent<AlarmMinusProps> {}
