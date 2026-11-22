import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HeartXWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HeartXWide: ForwardRefExoticComponent<HeartXWideProps & RefAttributes<SVGSVGElement>>;

export default HeartXWide;
export { HeartXWide };
