import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudSendRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudSendRound: ForwardRefExoticComponent<CloudSendRoundProps & RefAttributes<SVGSVGElement>>;

export default CloudSendRound;
export { CloudSendRound };
