import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudLinkRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudLinkRound: ForwardRefExoticComponent<CloudLinkRoundProps & RefAttributes<SVGSVGElement>>;

export default CloudLinkRound;
export { CloudLinkRound };
