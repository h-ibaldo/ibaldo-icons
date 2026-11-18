import { SvelteComponent } from 'svelte';

export interface AlarmMinusBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlarmMinusBare extends SvelteComponent<AlarmMinusBareProps> {}
