import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StethoscopeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Stethoscope: ForwardRefExoticComponent<StethoscopeProps & RefAttributes<SVGSVGElement>>;

export default Stethoscope;
export { Stethoscope };
