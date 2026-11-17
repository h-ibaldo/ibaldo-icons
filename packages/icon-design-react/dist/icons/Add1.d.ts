import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Add1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Add1: ForwardRefExoticComponent<Add1Props & RefAttributes<SVGSVGElement>>;

export default Add1;
export { Add1 };
