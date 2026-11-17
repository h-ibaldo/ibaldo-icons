import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandTapOneProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandTapOne: ForwardRefExoticComponent<HandTapOneProps & RefAttributes<SVGSVGElement>>;

export default HandTapOne;
export { HandTapOne };
