import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudSquareRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudSquareRound: ForwardRefExoticComponent<CloudSquareRoundProps & RefAttributes<SVGSVGElement>>;

export default CloudSquareRound;
export { CloudSquareRound };
