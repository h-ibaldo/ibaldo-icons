import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandStopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandStop: ForwardRefExoticComponent<HandStopProps & RefAttributes<SVGSVGElement>>;

export default HandStop;
export { HandStop };
