import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkCircleCheckWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkCircleCheckWide: ForwardRefExoticComponent<LinkCircleCheckWideProps & RefAttributes<SVGSVGElement>>;

export default LinkCircleCheckWide;
export { LinkCircleCheckWide };
