import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PencilUnderlineProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PencilUnderline: ForwardRefExoticComponent<PencilUnderlineProps & RefAttributes<SVGSVGElement>>;

export default PencilUnderline;
export { PencilUnderline };
