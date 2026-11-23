import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BotPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BotPlus: ForwardRefExoticComponent<BotPlusProps & RefAttributes<SVGSVGElement>>;

export default BotPlus;
export { BotPlus };
