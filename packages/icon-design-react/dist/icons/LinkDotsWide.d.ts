import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkDotsWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkDotsWide: ForwardRefExoticComponent<LinkDotsWideProps & RefAttributes<SVGSVGElement>>;

export default LinkDotsWide;
export { LinkDotsWide };
