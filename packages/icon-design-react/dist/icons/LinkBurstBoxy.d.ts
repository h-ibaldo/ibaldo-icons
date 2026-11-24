import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkBurstBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkBurstBoxy: ForwardRefExoticComponent<LinkBurstBoxyProps & RefAttributes<SVGSVGElement>>;

export default LinkBurstBoxy;
export { LinkBurstBoxy };
