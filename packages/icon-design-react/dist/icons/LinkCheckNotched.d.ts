import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkCheckNotchedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkCheckNotched: ForwardRefExoticComponent<LinkCheckNotchedProps & RefAttributes<SVGSVGElement>>;

export default LinkCheckNotched;
export { LinkCheckNotched };
