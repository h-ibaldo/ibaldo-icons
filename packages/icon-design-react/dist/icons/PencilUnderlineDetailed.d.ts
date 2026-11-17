import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PencilUnderlineDetailedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PencilUnderlineDetailed: ForwardRefExoticComponent<PencilUnderlineDetailedProps & RefAttributes<SVGSVGElement>>;

export default PencilUnderlineDetailed;
export { PencilUnderlineDetailed };
