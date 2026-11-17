import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PencilUnderlineAngularProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PencilUnderlineAngular: ForwardRefExoticComponent<PencilUnderlineAngularProps & RefAttributes<SVGSVGElement>>;

export default PencilUnderlineAngular;
export { PencilUnderlineAngular };
