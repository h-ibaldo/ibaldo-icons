import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkRaysRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkRaysRound: ForwardRefExoticComponent<LinkRaysRoundProps & RefAttributes<SVGSVGElement>>;

export default LinkRaysRound;
export { LinkRaysRound };
