import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PencilProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Pencil: ForwardRefExoticComponent<PencilProps & RefAttributes<SVGSVGElement>>;

export default Pencil;
export { Pencil };
