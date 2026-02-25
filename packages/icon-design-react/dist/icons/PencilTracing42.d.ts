import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PencilTracing42Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PencilTracing42: ForwardRefExoticComponent<PencilTracing42Props & RefAttributes<SVGSVGElement>>;

export default PencilTracing42;
export { PencilTracing42 };
