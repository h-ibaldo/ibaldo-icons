import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserRabbitProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserRabbit: ForwardRefExoticComponent<BrowserRabbitProps & RefAttributes<SVGSVGElement>>;

export default BrowserRabbit;
export { BrowserRabbit };
