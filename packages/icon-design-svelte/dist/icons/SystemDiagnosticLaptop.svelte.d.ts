import { SvelteComponent } from 'svelte';

export interface SystemDiagnosticLaptopProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SystemDiagnosticLaptop extends SvelteComponent<SystemDiagnosticLaptopProps> {}
