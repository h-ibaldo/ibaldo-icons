import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PencilCurvedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PencilCurved: ForwardRefExoticComponent<PencilCurvedProps & RefAttributes<SVGSVGElement>>;

export default PencilCurved;
export { PencilCurved };
