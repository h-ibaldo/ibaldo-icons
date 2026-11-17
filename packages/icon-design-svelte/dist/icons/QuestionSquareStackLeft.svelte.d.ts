import { SvelteComponent } from 'svelte';

export interface QuestionSquareStackLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class QuestionSquareStackLeft extends SvelteComponent<QuestionSquareStackLeftProps> {}
