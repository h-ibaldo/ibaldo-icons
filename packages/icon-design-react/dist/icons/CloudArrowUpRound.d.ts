import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudArrowUpRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudArrowUpRound: ForwardRefExoticComponent<CloudArrowUpRoundProps & RefAttributes<SVGSVGElement>>;

export default CloudArrowUpRound;
export { CloudArrowUpRound };
