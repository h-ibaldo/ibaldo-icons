import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkRaysFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkRaysFlat: ForwardRefExoticComponent<LinkRaysFlatProps & RefAttributes<SVGSVGElement>>;

export default LinkRaysFlat;
export { LinkRaysFlat };
