import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bot: ForwardRefExoticComponent<BotProps & RefAttributes<SVGSVGElement>>;

export default Bot;
export { Bot };
