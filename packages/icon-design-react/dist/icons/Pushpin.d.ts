import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PushpinProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Pushpin: ForwardRefExoticComponent<PushpinProps & RefAttributes<SVGSVGElement>>;

export default Pushpin;
export { Pushpin };
