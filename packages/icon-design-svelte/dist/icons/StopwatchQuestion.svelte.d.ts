import { SvelteComponent } from 'svelte';

export interface StopwatchQuestionProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchQuestion extends SvelteComponent<StopwatchQuestionProps> {}
