import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkPlusFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkPlusFlat: ForwardRefExoticComponent<LinkPlusFlatProps & RefAttributes<SVGSVGElement>>;

export default LinkPlusFlat;
export { LinkPlusFlat };
