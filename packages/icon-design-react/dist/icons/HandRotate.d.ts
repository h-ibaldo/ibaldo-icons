import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandRotateProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandRotate: ForwardRefExoticComponent<HandRotateProps & RefAttributes<SVGSVGElement>>;

export default HandRotate;
export { HandRotate };
