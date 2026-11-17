import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WarningOffRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WarningOffRound: ForwardRefExoticComponent<WarningOffRoundProps & RefAttributes<SVGSVGElement>>;

export default WarningOffRound;
export { WarningOffRound };
