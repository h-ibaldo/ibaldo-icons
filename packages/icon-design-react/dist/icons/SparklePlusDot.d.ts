import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SparklePlusDotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SparklePlusDot: ForwardRefExoticComponent<SparklePlusDotProps & RefAttributes<SVGSVGElement>>;

export default SparklePlusDot;
export { SparklePlusDot };
