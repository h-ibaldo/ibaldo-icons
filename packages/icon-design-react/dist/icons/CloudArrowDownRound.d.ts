import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudArrowDownRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudArrowDownRound: ForwardRefExoticComponent<CloudArrowDownRoundProps & RefAttributes<SVGSVGElement>>;

export default CloudArrowDownRound;
export { CloudArrowDownRound };
