import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SkipLineOver3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SkipLineOver3: ForwardRefExoticComponent<SkipLineOver3Props & RefAttributes<SVGSVGElement>>;

export default SkipLineOver3;
export { SkipLineOver3 };
