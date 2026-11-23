import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BotVisorProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BotVisor: ForwardRefExoticComponent<BotVisorProps & RefAttributes<SVGSVGElement>>;

export default BotVisor;
export { BotVisor };
