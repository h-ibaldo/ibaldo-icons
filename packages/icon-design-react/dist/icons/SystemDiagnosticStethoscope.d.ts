import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SystemDiagnosticStethoscopeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SystemDiagnosticStethoscope: ForwardRefExoticComponent<SystemDiagnosticStethoscopeProps & RefAttributes<SVGSVGElement>>;

export default SystemDiagnosticStethoscope;
export { SystemDiagnosticStethoscope };
