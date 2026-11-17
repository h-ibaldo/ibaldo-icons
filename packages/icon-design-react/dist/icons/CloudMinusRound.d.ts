import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudMinusRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudMinusRound: ForwardRefExoticComponent<CloudMinusRoundProps & RefAttributes<SVGSVGElement>>;

export default CloudMinusRound;
export { CloudMinusRound };
