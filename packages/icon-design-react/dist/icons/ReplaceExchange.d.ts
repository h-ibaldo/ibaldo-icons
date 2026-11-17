import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ReplaceExchangeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ReplaceExchange: ForwardRefExoticComponent<ReplaceExchangeProps & RefAttributes<SVGSVGElement>>;

export default ReplaceExchange;
export { ReplaceExchange };
