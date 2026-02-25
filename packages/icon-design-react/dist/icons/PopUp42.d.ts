import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PopUp42Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PopUp42: ForwardRefExoticComponent<PopUp42Props & RefAttributes<SVGSVGElement>>;

export default PopUp42;
export { PopUp42 };
