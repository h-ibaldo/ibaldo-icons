import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkRaysBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkRaysBoxy: ForwardRefExoticComponent<LinkRaysBoxyProps & RefAttributes<SVGSVGElement>>;

export default LinkRaysBoxy;
export { LinkRaysBoxy };
