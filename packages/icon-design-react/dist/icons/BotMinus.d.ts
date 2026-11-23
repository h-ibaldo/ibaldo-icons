import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BotMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BotMinus: ForwardRefExoticComponent<BotMinusProps & RefAttributes<SVGSVGElement>>;

export default BotMinus;
export { BotMinus };
