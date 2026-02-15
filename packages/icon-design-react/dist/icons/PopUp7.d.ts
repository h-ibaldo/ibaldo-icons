import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PopUp7Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PopUp7: ForwardRefExoticComponent<PopUp7Props & RefAttributes<SVGSVGElement>>;

export default PopUp7;
export { PopUp7 };
