import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface XProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const X: ForwardRefExoticComponent<XProps & RefAttributes<SVGSVGElement>>;

export default X;
export { X };
