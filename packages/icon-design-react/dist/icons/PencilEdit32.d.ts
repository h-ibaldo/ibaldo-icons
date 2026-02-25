import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PencilEdit32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PencilEdit32: ForwardRefExoticComponent<PencilEdit32Props & RefAttributes<SVGSVGElement>>;

export default PencilEdit32;
export { PencilEdit32 };
