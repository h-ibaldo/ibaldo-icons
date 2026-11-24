import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FlagOffWavyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FlagOffWavy: ForwardRefExoticComponent<FlagOffWavyProps & RefAttributes<SVGSVGElement>>;

export default FlagOffWavy;
export { FlagOffWavy };
