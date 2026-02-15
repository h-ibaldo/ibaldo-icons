import { SvelteComponent } from 'svelte';

export interface CheckMarkSolidGeometricProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckMarkSolidGeometric extends SvelteComponent<CheckMarkSolidGeometricProps> {}
