import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FlagStandProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FlagStand: ForwardRefExoticComponent<FlagStandProps & RefAttributes<SVGSVGElement>>;

export default FlagStand;
export { FlagStand };
