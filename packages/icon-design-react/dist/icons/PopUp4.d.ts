import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PopUp4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PopUp4: ForwardRefExoticComponent<PopUp4Props & RefAttributes<SVGSVGElement>>;

export default PopUp4;
export { PopUp4 };
