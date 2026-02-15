import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PopUp2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PopUp2: ForwardRefExoticComponent<PopUp2Props & RefAttributes<SVGSVGElement>>;

export default PopUp2;
export { PopUp2 };
