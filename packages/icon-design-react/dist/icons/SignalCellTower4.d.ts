import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SignalCellTower4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SignalCellTower4: ForwardRefExoticComponent<SignalCellTower4Props & RefAttributes<SVGSVGElement>>;

export default SignalCellTower4;
export { SignalCellTower4 };
