import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudCheckRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudCheckRound: ForwardRefExoticComponent<CloudCheckRoundProps & RefAttributes<SVGSVGElement>>;

export default CloudCheckRound;
export { CloudCheckRound };
