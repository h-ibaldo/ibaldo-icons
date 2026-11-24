import { SvelteComponent } from 'svelte';

export interface QuestionCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class QuestionCircle extends SvelteComponent<QuestionCircleProps> {}
