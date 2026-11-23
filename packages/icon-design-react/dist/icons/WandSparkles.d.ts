import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WandSparklesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WandSparkles: ForwardRefExoticComponent<WandSparklesProps & RefAttributes<SVGSVGElement>>;

export default WandSparkles;
export { WandSparkles };
