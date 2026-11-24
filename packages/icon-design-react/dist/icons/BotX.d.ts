import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BotXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BotX: ForwardRefExoticComponent<BotXProps & RefAttributes<SVGSVGElement>>;

export default BotX;
export { BotX };
