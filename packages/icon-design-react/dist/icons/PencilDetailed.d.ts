import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PencilDetailedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PencilDetailed: ForwardRefExoticComponent<PencilDetailedProps & RefAttributes<SVGSVGElement>>;

export default PencilDetailed;
export { PencilDetailed };
