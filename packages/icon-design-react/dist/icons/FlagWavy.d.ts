import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FlagWavyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FlagWavy: ForwardRefExoticComponent<FlagWavyProps & RefAttributes<SVGSVGElement>>;

export default FlagWavy;
export { FlagWavy };
