import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FaqBubblesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FaqBubbles: ForwardRefExoticComponent<FaqBubblesProps & RefAttributes<SVGSVGElement>>;

export default FaqBubbles;
export { FaqBubbles };
