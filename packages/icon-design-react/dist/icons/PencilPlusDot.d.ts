import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PencilPlusDotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PencilPlusDot: ForwardRefExoticComponent<PencilPlusDotProps & RefAttributes<SVGSVGElement>>;

export default PencilPlusDot;
export { PencilPlusDot };
