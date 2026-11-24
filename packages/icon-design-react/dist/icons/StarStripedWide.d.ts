import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StarStripedWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StarStripedWide: ForwardRefExoticComponent<StarStripedWideProps & RefAttributes<SVGSVGElement>>;

export default StarStripedWide;
export { StarStripedWide };
