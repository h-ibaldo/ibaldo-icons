import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PencilTracing32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PencilTracing32: ForwardRefExoticComponent<PencilTracing32Props & RefAttributes<SVGSVGElement>>;

export default PencilTracing32;
export { PencilTracing32 };
