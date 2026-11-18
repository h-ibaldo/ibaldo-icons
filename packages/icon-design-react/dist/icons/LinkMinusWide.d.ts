import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkMinusWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkMinusWide: ForwardRefExoticComponent<LinkMinusWideProps & RefAttributes<SVGSVGElement>>;

export default LinkMinusWide;
export { LinkMinusWide };
