import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MobileBagProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MobileBag: ForwardRefExoticComponent<MobileBagProps & RefAttributes<SVGSVGElement>>;

export default MobileBag;
export { MobileBag };
