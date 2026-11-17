import { SvelteComponent } from 'svelte';

export interface QuestionAnswerOverlapProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class QuestionAnswerOverlap extends SvelteComponent<QuestionAnswerOverlapProps> {}
