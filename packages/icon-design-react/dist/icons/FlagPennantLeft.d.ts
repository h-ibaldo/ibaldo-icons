import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FlagPennantLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FlagPennantLeft: ForwardRefExoticComponent<FlagPennantLeftProps & RefAttributes<SVGSVGElement>>;

export default FlagPennantLeft;
export { FlagPennantLeft };
