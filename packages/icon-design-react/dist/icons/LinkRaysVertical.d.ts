import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkRaysVerticalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkRaysVertical: ForwardRefExoticComponent<LinkRaysVerticalProps & RefAttributes<SVGSVGElement>>;

export default LinkRaysVertical;
export { LinkRaysVertical };
