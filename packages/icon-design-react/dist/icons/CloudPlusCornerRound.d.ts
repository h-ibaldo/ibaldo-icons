import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudPlusCornerRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudPlusCornerRound: ForwardRefExoticComponent<CloudPlusCornerRoundProps & RefAttributes<SVGSVGElement>>;

export default CloudPlusCornerRound;
export { CloudPlusCornerRound };
