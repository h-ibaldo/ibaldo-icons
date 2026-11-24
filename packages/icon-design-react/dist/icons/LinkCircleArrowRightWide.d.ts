import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkCircleArrowRightWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkCircleArrowRightWide: ForwardRefExoticComponent<LinkCircleArrowRightWideProps & RefAttributes<SVGSVGElement>>;

export default LinkCircleArrowRightWide;
export { LinkCircleArrowRightWide };
