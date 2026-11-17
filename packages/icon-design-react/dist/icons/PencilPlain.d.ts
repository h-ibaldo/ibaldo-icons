import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PencilPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PencilPlain: ForwardRefExoticComponent<PencilPlainProps & RefAttributes<SVGSVGElement>>;

export default PencilPlain;
export { PencilPlain };
