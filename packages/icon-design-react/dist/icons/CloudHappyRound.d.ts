import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudHappyRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudHappyRound: ForwardRefExoticComponent<CloudHappyRoundProps & RefAttributes<SVGSVGElement>>;

export default CloudHappyRound;
export { CloudHappyRound };
