import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SystemDiagnosticLaptopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SystemDiagnosticLaptop: ForwardRefExoticComponent<SystemDiagnosticLaptopProps & RefAttributes<SVGSVGElement>>;

export default SystemDiagnosticLaptop;
export { SystemDiagnosticLaptop };
