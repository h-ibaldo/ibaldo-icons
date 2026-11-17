import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudLinkVerticalRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudLinkVerticalRound: ForwardRefExoticComponent<CloudLinkVerticalRoundProps & RefAttributes<SVGSVGElement>>;

export default CloudLinkVerticalRound;
export { CloudLinkVerticalRound };
