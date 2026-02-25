import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchScreenSpread2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchScreenSpread2: ForwardRefExoticComponent<TouchScreenSpread2Props & RefAttributes<SVGSVGElement>>;

export default TouchScreenSpread2;
export { TouchScreenSpread2 };
