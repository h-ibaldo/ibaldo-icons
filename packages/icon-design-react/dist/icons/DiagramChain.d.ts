import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DiagramChainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DiagramChain: ForwardRefExoticComponent<DiagramChainProps & RefAttributes<SVGSVGElement>>;

export default DiagramChain;
export { DiagramChain };
