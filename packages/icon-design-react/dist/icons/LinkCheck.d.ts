import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkCheck: ForwardRefExoticComponent<LinkCheckProps & RefAttributes<SVGSVGElement>>;

export default LinkCheck;
export { LinkCheck };
