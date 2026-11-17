import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudLinkDiagonalRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudLinkDiagonalRound: ForwardRefExoticComponent<CloudLinkDiagonalRoundProps & RefAttributes<SVGSVGElement>>;

export default CloudLinkDiagonalRound;
export { CloudLinkDiagonalRound };
