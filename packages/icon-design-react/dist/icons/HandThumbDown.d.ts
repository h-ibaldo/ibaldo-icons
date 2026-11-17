import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandThumbDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandThumbDown: ForwardRefExoticComponent<HandThumbDownProps & RefAttributes<SVGSVGElement>>;

export default HandThumbDown;
export { HandThumbDown };
