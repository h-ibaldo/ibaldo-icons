import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PencilEdit12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PencilEdit12: ForwardRefExoticComponent<PencilEdit12Props & RefAttributes<SVGSVGElement>>;

export default PencilEdit12;
export { PencilEdit12 };
