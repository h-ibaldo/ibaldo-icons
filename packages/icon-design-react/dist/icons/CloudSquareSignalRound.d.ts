import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudSquareSignalRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudSquareSignalRound: ForwardRefExoticComponent<CloudSquareSignalRoundProps & RefAttributes<SVGSVGElement>>;

export default CloudSquareSignalRound;
export { CloudSquareSignalRound };
