import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkMinusRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkMinusRound: ForwardRefExoticComponent<LinkMinusRoundProps & RefAttributes<SVGSVGElement>>;

export default LinkMinusRound;
export { LinkMinusRound };
