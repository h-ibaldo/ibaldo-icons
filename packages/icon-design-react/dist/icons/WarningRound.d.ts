import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WarningRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WarningRound: ForwardRefExoticComponent<WarningRoundProps & RefAttributes<SVGSVGElement>>;

export default WarningRound;
export { WarningRound };
