import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudOffRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudOffRound: ForwardRefExoticComponent<CloudOffRoundProps & RefAttributes<SVGSVGElement>>;

export default CloudOffRound;
export { CloudOffRound };
