import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SystemDiagnosticStethoscopeListProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SystemDiagnosticStethoscopeList: ForwardRefExoticComponent<SystemDiagnosticStethoscopeListProps & RefAttributes<SVGSVGElement>>;

export default SystemDiagnosticStethoscopeList;
export { SystemDiagnosticStethoscopeList };
