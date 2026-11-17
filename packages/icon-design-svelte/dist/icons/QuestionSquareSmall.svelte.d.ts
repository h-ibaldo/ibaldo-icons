import { SvelteComponent } from 'svelte';

export interface QuestionSquareSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class QuestionSquareSmall extends SvelteComponent<QuestionSquareSmallProps> {}
