import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkArrowUpRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkArrowUpRound: ForwardRefExoticComponent<LinkArrowUpRoundProps & RefAttributes<SVGSVGElement>>;

export default LinkArrowUpRound;
export { LinkArrowUpRound };
