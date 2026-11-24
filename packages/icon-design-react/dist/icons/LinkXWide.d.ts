import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkXWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkXWide: ForwardRefExoticComponent<LinkXWideProps & RefAttributes<SVGSVGElement>>;

export default LinkXWide;
export { LinkXWide };
