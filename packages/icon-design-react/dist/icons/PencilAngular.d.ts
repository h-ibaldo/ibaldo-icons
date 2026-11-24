import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PencilAngularProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PencilAngular: ForwardRefExoticComponent<PencilAngularProps & RefAttributes<SVGSVGElement>>;

export default PencilAngular;
export { PencilAngular };
