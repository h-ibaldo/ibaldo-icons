import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderHeartProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderHeart: ForwardRefExoticComponent<FolderHeartProps & RefAttributes<SVGSVGElement>>;

export default FolderHeart;
export { FolderHeart };
