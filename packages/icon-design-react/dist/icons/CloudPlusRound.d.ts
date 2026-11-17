import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudPlusRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudPlusRound: ForwardRefExoticComponent<CloudPlusRoundProps & RefAttributes<SVGSVGElement>>;

export default CloudPlusRound;
export { CloudPlusRound };
