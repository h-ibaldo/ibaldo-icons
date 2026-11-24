import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HeartCheckWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HeartCheckWide: ForwardRefExoticComponent<HeartCheckWideProps & RefAttributes<SVGSVGElement>>;

export default HeartCheckWide;
export { HeartCheckWide };
