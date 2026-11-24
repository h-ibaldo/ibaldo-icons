import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BinaryProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Binary: ForwardRefExoticComponent<BinaryProps & RefAttributes<SVGSVGElement>>;

export default Binary;
export { Binary };
