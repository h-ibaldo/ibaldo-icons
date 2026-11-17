import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudXCornerRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudXCornerRound: ForwardRefExoticComponent<CloudXCornerRoundProps & RefAttributes<SVGSVGElement>>;

export default CloudXCornerRound;
export { CloudXCornerRound };
