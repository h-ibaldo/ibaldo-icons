import { SvelteComponent } from 'svelte';

export interface SystemDiagnosticLaptopPulseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SystemDiagnosticLaptopPulse extends SvelteComponent<SystemDiagnosticLaptopPulseProps> {}
