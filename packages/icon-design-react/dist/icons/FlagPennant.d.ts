import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FlagPennantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FlagPennant: ForwardRefExoticComponent<FlagPennantProps & RefAttributes<SVGSVGElement>>;

export default FlagPennant;
export { FlagPennant };
