import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandPointerUnderlineProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandPointerUnderline: ForwardRefExoticComponent<HandPointerUnderlineProps & RefAttributes<SVGSVGElement>>;

export default HandPointerUnderline;
export { HandPointerUnderline };
