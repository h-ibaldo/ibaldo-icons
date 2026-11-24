import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HeadphonesOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HeadphonesOff: ForwardRefExoticComponent<HeadphonesOffProps & RefAttributes<SVGSVGElement>>;

export default HeadphonesOff;
export { HeadphonesOff };
