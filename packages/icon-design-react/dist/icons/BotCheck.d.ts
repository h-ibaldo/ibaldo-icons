import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BotCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BotCheck: ForwardRefExoticComponent<BotCheckProps & RefAttributes<SVGSVGElement>>;

export default BotCheck;
export { BotCheck };
