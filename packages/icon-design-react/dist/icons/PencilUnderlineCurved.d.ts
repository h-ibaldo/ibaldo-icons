import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PencilUnderlineCurvedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PencilUnderlineCurved: ForwardRefExoticComponent<PencilUnderlineCurvedProps & RefAttributes<SVGSVGElement>>;

export default PencilUnderlineCurved;
export { PencilUnderlineCurved };
