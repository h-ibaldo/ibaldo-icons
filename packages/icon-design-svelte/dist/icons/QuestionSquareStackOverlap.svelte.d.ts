import { SvelteComponent } from 'svelte';

export interface QuestionSquareStackOverlapProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class QuestionSquareStackOverlap extends SvelteComponent<QuestionSquareStackOverlapProps> {}
