import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudEyeRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudEyeRound: ForwardRefExoticComponent<CloudEyeRoundProps & RefAttributes<SVGSVGElement>>;

export default CloudEyeRound;
export { CloudEyeRound };
