import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MobileHeartProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MobileHeart: ForwardRefExoticComponent<MobileHeartProps & RefAttributes<SVGSVGElement>>;

export default MobileHeart;
export { MobileHeart };
