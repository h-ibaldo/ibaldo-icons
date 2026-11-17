import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudRound: ForwardRefExoticComponent<CloudRoundProps & RefAttributes<SVGSVGElement>>;

export default CloudRound;
export { CloudRound };
