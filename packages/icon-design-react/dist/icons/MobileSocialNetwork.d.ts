import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MobileSocialNetworkProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MobileSocialNetwork: ForwardRefExoticComponent<MobileSocialNetworkProps & RefAttributes<SVGSVGElement>>;

export default MobileSocialNetwork;
export { MobileSocialNetwork };
