import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BackspaceRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BackspaceRound: ForwardRefExoticComponent<BackspaceRoundProps & RefAttributes<SVGSVGElement>>;

export default BackspaceRound;
export { BackspaceRound };
