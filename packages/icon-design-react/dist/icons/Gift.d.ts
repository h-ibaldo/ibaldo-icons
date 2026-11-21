import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GiftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Gift: ForwardRefExoticComponent<GiftProps & RefAttributes<SVGSVGElement>>;

export default Gift;
export { Gift };
