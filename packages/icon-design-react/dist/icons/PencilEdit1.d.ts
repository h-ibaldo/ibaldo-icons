import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PencilEdit1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PencilEdit1: ForwardRefExoticComponent<PencilEdit1Props & RefAttributes<SVGSVGElement>>;

export default PencilEdit1;
export { PencilEdit1 };
