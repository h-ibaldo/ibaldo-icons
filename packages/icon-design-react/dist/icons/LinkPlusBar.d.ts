import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkPlusBarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkPlusBar: ForwardRefExoticComponent<LinkPlusBarProps & RefAttributes<SVGSVGElement>>;

export default LinkPlusBar;
export { LinkPlusBar };
