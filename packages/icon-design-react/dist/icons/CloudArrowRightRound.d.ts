import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudArrowRightRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudArrowRightRound: ForwardRefExoticComponent<CloudArrowRightRoundProps & RefAttributes<SVGSVGElement>>;

export default CloudArrowRightRound;
export { CloudArrowRightRound };
