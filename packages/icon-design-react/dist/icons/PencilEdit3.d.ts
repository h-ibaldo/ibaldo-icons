import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PencilEdit3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PencilEdit3: ForwardRefExoticComponent<PencilEdit3Props & RefAttributes<SVGSVGElement>>;

export default PencilEdit3;
export { PencilEdit3 };
