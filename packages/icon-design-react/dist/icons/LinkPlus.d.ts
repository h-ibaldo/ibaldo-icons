import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkPlus: ForwardRefExoticComponent<LinkPlusProps & RefAttributes<SVGSVGElement>>;

export default LinkPlus;
export { LinkPlus };
