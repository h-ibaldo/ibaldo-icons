import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HeartStripedWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HeartStripedWide: ForwardRefExoticComponent<HeartStripedWideProps & RefAttributes<SVGSVGElement>>;

export default HeartStripedWide;
export { HeartStripedWide };
