import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudMailRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudMailRound: ForwardRefExoticComponent<CloudMailRoundProps & RefAttributes<SVGSVGElement>>;

export default CloudMailRound;
export { CloudMailRound };
