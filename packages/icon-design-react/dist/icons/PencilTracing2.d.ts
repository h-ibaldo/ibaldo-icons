import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PencilTracing2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PencilTracing2: ForwardRefExoticComponent<PencilTracing2Props & RefAttributes<SVGSVGElement>>;

export default PencilTracing2;
export { PencilTracing2 };
