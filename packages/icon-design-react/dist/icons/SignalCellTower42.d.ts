import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SignalCellTower42Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SignalCellTower42: ForwardRefExoticComponent<SignalCellTower42Props & RefAttributes<SVGSVGElement>>;

export default SignalCellTower42;
export { SignalCellTower42 };
