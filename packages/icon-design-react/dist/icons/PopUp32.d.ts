import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PopUp32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PopUp32: ForwardRefExoticComponent<PopUp32Props & RefAttributes<SVGSVGElement>>;

export default PopUp32;
export { PopUp32 };
