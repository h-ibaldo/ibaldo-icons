import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LayoutListSymbolsDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LayoutListSymbolsDashed: ForwardRefExoticComponent<LayoutListSymbolsDashedProps & RefAttributes<SVGSVGElement>>;

export default LayoutListSymbolsDashed;
export { LayoutListSymbolsDashed };
