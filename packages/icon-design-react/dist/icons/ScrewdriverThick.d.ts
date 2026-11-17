import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScrewdriverThickProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScrewdriverThick: ForwardRefExoticComponent<ScrewdriverThickProps & RefAttributes<SVGSVGElement>>;

export default ScrewdriverThick;
export { ScrewdriverThick };
