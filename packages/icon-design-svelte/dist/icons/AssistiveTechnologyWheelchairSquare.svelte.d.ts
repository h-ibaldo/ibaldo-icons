import { SvelteComponent } from 'svelte';

export interface AssistiveTechnologyWheelchairSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AssistiveTechnologyWheelchairSquare extends SvelteComponent<AssistiveTechnologyWheelchairSquareProps> {}
