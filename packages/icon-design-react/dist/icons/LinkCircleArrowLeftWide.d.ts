import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkCircleArrowLeftWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkCircleArrowLeftWide: ForwardRefExoticComponent<LinkCircleArrowLeftWideProps & RefAttributes<SVGSVGElement>>;

export default LinkCircleArrowLeftWide;
export { LinkCircleArrowLeftWide };
