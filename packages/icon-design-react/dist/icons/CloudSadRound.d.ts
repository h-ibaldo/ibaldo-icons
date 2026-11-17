import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudSadRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudSadRound: ForwardRefExoticComponent<CloudSadRoundProps & RefAttributes<SVGSVGElement>>;

export default CloudSadRound;
export { CloudSadRound };
