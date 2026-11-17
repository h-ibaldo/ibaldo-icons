import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LayoutListSymbolsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LayoutListSymbols: ForwardRefExoticComponent<LayoutListSymbolsProps & RefAttributes<SVGSVGElement>>;

export default LayoutListSymbols;
export { LayoutListSymbols };
