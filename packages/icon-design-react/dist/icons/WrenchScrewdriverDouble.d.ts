import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WrenchScrewdriverDoubleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WrenchScrewdriverDouble: ForwardRefExoticComponent<WrenchScrewdriverDoubleProps & RefAttributes<SVGSVGElement>>;

export default WrenchScrewdriverDouble;
export { WrenchScrewdriverDouble };
