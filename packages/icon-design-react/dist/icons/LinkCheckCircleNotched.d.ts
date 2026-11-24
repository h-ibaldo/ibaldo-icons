import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkCheckCircleNotchedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkCheckCircleNotched: ForwardRefExoticComponent<LinkCheckCircleNotchedProps & RefAttributes<SVGSVGElement>>;

export default LinkCheckCircleNotched;
export { LinkCheckCircleNotched };
