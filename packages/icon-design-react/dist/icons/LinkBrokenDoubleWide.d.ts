import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkBrokenDoubleWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkBrokenDoubleWide: ForwardRefExoticComponent<LinkBrokenDoubleWideProps & RefAttributes<SVGSVGElement>>;

export default LinkBrokenDoubleWide;
export { LinkBrokenDoubleWide };
