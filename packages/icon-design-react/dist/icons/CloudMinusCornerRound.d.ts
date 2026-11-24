import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudMinusCornerRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudMinusCornerRound: ForwardRefExoticComponent<CloudMinusCornerRoundProps & RefAttributes<SVGSVGElement>>;

export default CloudMinusCornerRound;
export { CloudMinusCornerRound };
