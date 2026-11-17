import { SvelteComponent } from 'svelte';

export interface QuestionSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class QuestionSquare extends SvelteComponent<QuestionSquareProps> {}
