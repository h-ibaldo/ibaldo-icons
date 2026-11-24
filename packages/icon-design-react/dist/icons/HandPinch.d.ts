import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandPinchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandPinch: ForwardRefExoticComponent<HandPinchProps & RefAttributes<SVGSVGElement>>;

export default HandPinch;
export { HandPinch };
