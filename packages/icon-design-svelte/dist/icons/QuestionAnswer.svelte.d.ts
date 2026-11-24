import { SvelteComponent } from 'svelte';

export interface QuestionAnswerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class QuestionAnswer extends SvelteComponent<QuestionAnswerProps> {}
