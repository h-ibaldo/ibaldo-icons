import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronUpLeftSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronUpLeftSmall: ForwardRefExoticComponent<ChevronUpLeftSmallProps & RefAttributes<SVGSVGElement>>;

export default ChevronUpLeftSmall;
export { ChevronUpLeftSmall };
