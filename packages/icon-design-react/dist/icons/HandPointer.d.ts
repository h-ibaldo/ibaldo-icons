import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandPointerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandPointer: ForwardRefExoticComponent<HandPointerProps & RefAttributes<SVGSVGElement>>;

export default HandPointer;
export { HandPointer };
