import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PencilBluntProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PencilBlunt: ForwardRefExoticComponent<PencilBluntProps & RefAttributes<SVGSVGElement>>;

export default PencilBlunt;
export { PencilBlunt };
