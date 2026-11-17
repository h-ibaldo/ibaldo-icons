import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WrenchScrewdriverProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WrenchScrewdriver: ForwardRefExoticComponent<WrenchScrewdriverProps & RefAttributes<SVGSVGElement>>;

export default WrenchScrewdriver;
export { WrenchScrewdriver };
