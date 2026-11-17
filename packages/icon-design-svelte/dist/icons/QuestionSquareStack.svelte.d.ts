import { SvelteComponent } from 'svelte';

export interface QuestionSquareStackProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class QuestionSquareStack extends SvelteComponent<QuestionSquareStackProps> {}
