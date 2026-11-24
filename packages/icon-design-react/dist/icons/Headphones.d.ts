import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HeadphonesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Headphones: ForwardRefExoticComponent<HeadphonesProps & RefAttributes<SVGSVGElement>>;

export default Headphones;
export { Headphones };
