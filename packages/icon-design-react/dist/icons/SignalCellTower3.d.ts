import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SignalCellTower3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SignalCellTower3: ForwardRefExoticComponent<SignalCellTower3Props & RefAttributes<SVGSVGElement>>;

export default SignalCellTower3;
export { SignalCellTower3 };
