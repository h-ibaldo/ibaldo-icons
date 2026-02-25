import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PencilEdit42Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PencilEdit42: ForwardRefExoticComponent<PencilEdit42Props & RefAttributes<SVGSVGElement>>;

export default PencilEdit42;
export { PencilEdit42 };
