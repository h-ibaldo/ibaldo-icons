import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PencilTracing3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PencilTracing3: ForwardRefExoticComponent<PencilTracing3Props & RefAttributes<SVGSVGElement>>;

export default PencilTracing3;
export { PencilTracing3 };
