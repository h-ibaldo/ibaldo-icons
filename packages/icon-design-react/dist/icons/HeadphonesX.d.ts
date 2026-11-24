import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HeadphonesXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HeadphonesX: ForwardRefExoticComponent<HeadphonesXProps & RefAttributes<SVGSVGElement>>;

export default HeadphonesX;
export { HeadphonesX };
