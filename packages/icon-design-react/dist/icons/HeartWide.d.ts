import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HeartWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HeartWide: ForwardRefExoticComponent<HeartWideProps & RefAttributes<SVGSVGElement>>;

export default HeartWide;
export { HeartWide };
