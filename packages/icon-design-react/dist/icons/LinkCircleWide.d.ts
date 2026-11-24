import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkCircleWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkCircleWide: ForwardRefExoticComponent<LinkCircleWideProps & RefAttributes<SVGSVGElement>>;

export default LinkCircleWide;
export { LinkCircleWide };
