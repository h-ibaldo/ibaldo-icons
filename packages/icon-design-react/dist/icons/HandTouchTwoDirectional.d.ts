import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandTouchTwoDirectionalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandTouchTwoDirectional: ForwardRefExoticComponent<HandTouchTwoDirectionalProps & RefAttributes<SVGSVGElement>>;

export default HandTouchTwoDirectional;
export { HandTouchTwoDirectional };
