import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkSquareWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkSquareWide: ForwardRefExoticComponent<LinkSquareWideProps & RefAttributes<SVGSVGElement>>;

export default LinkSquareWide;
export { LinkSquareWide };
