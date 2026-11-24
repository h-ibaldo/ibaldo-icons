import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HeartBrokenWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HeartBrokenWide: ForwardRefExoticComponent<HeartBrokenWideProps & RefAttributes<SVGSVGElement>>;

export default HeartBrokenWide;
export { HeartBrokenWide };
