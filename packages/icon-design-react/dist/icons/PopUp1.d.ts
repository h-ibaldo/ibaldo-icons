import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PopUp1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PopUp1: ForwardRefExoticComponent<PopUp1Props & RefAttributes<SVGSVGElement>>;

export default PopUp1;
export { PopUp1 };
