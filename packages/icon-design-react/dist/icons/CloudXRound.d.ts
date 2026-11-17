import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudXRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudXRound: ForwardRefExoticComponent<CloudXRoundProps & RefAttributes<SVGSVGElement>>;

export default CloudXRound;
export { CloudXRound };
