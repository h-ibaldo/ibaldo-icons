import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkMenuWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkMenuWide: ForwardRefExoticComponent<LinkMenuWideProps & RefAttributes<SVGSVGElement>>;

export default LinkMenuWide;
export { LinkMenuWide };
