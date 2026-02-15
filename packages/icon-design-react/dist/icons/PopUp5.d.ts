import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PopUp5Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PopUp5: ForwardRefExoticComponent<PopUp5Props & RefAttributes<SVGSVGElement>>;

export default PopUp5;
export { PopUp5 };
