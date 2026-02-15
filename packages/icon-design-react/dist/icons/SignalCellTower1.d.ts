import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SignalCellTower1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SignalCellTower1: ForwardRefExoticComponent<SignalCellTower1Props & RefAttributes<SVGSVGElement>>;

export default SignalCellTower1;
export { SignalCellTower1 };
