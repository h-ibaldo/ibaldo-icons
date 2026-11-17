import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkCheckCircleSlantedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkCheckCircleSlanted: ForwardRefExoticComponent<LinkCheckCircleSlantedProps & RefAttributes<SVGSVGElement>>;

export default LinkCheckCircleSlanted;
export { LinkCheckCircleSlanted };
