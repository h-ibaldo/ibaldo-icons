import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PencilUnderlineBluntProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PencilUnderlineBlunt: ForwardRefExoticComponent<PencilUnderlineBluntProps & RefAttributes<SVGSVGElement>>;

export default PencilUnderlineBlunt;
export { PencilUnderlineBlunt };
