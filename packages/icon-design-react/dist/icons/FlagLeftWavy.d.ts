import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FlagLeftWavyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FlagLeftWavy: ForwardRefExoticComponent<FlagLeftWavyProps & RefAttributes<SVGSVGElement>>;

export default FlagLeftWavy;
export { FlagLeftWavy };
