import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkMenuRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkMenuRound: ForwardRefExoticComponent<LinkMenuRoundProps & RefAttributes<SVGSVGElement>>;

export default LinkMenuRound;
export { LinkMenuRound };
