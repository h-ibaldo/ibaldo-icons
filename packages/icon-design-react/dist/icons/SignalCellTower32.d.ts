import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SignalCellTower32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SignalCellTower32: ForwardRefExoticComponent<SignalCellTower32Props & RefAttributes<SVGSVGElement>>;

export default SignalCellTower32;
export { SignalCellTower32 };
