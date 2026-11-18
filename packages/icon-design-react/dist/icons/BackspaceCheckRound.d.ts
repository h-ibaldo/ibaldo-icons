import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BackspaceCheckRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BackspaceCheckRound: ForwardRefExoticComponent<BackspaceCheckRoundProps & RefAttributes<SVGSVGElement>>;

export default BackspaceCheckRound;
export { BackspaceCheckRound };
