import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkArrowUpWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkArrowUpWide: ForwardRefExoticComponent<LinkArrowUpWideProps & RefAttributes<SVGSVGElement>>;

export default LinkArrowUpWide;
export { LinkArrowUpWide };
