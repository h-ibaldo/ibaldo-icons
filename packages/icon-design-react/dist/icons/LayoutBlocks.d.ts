import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LayoutBlocksProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LayoutBlocks: ForwardRefExoticComponent<LayoutBlocksProps & RefAttributes<SVGSVGElement>>;

export default LayoutBlocks;
export { LayoutBlocks };
