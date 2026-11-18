import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkCircleXWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkCircleXWide: ForwardRefExoticComponent<LinkCircleXWideProps & RefAttributes<SVGSVGElement>>;

export default LinkCircleXWide;
export { LinkCircleXWide };
