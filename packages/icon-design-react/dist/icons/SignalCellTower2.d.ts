import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SignalCellTower2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SignalCellTower2: ForwardRefExoticComponent<SignalCellTower2Props & RefAttributes<SVGSVGElement>>;

export default SignalCellTower2;
export { SignalCellTower2 };
