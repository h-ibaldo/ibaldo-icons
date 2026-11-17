import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudUnlockRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudUnlockRound: ForwardRefExoticComponent<CloudUnlockRoundProps & RefAttributes<SVGSVGElement>>;

export default CloudUnlockRound;
export { CloudUnlockRound };
