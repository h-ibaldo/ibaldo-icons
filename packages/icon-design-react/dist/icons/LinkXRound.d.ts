import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkXRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkXRound: ForwardRefExoticComponent<LinkXRoundProps & RefAttributes<SVGSVGElement>>;

export default LinkXRound;
export { LinkXRound };
