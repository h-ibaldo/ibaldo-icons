import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudCheckCornerRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudCheckCornerRound: ForwardRefExoticComponent<CloudCheckCornerRoundProps & RefAttributes<SVGSVGElement>>;

export default CloudCheckCornerRound;
export { CloudCheckCornerRound };
