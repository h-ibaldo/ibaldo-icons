import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkCheckWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkCheckWide: ForwardRefExoticComponent<LinkCheckWideProps & RefAttributes<SVGSVGElement>>;

export default LinkCheckWide;
export { LinkCheckWide };
