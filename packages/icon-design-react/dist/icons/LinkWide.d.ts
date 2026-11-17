import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkWide: ForwardRefExoticComponent<LinkWideProps & RefAttributes<SVGSVGElement>>;

export default LinkWide;
export { LinkWide };
