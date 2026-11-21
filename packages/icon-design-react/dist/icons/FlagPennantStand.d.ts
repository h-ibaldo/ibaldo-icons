import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FlagPennantStandProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FlagPennantStand: ForwardRefExoticComponent<FlagPennantStandProps & RefAttributes<SVGSVGElement>>;

export default FlagPennantStand;
export { FlagPennantStand };
