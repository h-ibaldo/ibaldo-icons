import { SvelteComponent } from 'svelte';

export interface StopwatchQuestionKnobProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopwatchQuestionKnob extends SvelteComponent<StopwatchQuestionKnobProps> {}
