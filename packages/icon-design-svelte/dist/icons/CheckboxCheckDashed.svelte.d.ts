import { SvelteComponent } from 'svelte';

export interface CheckboxCheckDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckboxCheckDashed extends SvelteComponent<CheckboxCheckDashedProps> {}
