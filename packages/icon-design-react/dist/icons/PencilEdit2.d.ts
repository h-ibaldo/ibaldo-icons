import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PencilEdit2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PencilEdit2: ForwardRefExoticComponent<PencilEdit2Props & RefAttributes<SVGSVGElement>>;

export default PencilEdit2;
export { PencilEdit2 };
