import { SvelteComponent } from 'svelte';

export interface CalculatorProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Calculator extends SvelteComponent<CalculatorProps> {}
