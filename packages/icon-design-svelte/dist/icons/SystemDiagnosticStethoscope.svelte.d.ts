import { SvelteComponent } from 'svelte';

export interface SystemDiagnosticStethoscopeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SystemDiagnosticStethoscope extends SvelteComponent<SystemDiagnosticStethoscopeProps> {}
