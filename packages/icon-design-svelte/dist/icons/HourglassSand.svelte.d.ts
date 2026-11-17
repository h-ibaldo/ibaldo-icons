import { SvelteComponent } from 'svelte';

export interface HourglassSandProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HourglassSand extends SvelteComponent<HourglassSandProps> {}
