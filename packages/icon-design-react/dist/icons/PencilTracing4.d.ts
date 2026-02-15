import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PencilTracing4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PencilTracing4: ForwardRefExoticComponent<PencilTracing4Props & RefAttributes<SVGSVGElement>>;

export default PencilTracing4;
export { PencilTracing4 };
