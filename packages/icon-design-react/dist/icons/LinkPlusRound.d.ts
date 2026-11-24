import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkPlusRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkPlusRound: ForwardRefExoticComponent<LinkPlusRoundProps & RefAttributes<SVGSVGElement>>;

export default LinkPlusRound;
export { LinkPlusRound };
