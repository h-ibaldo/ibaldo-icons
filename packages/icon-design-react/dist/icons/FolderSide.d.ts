import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FolderSideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FolderSide: ForwardRefExoticComponent<FolderSideProps & RefAttributes<SVGSVGElement>>;

export default FolderSide;
export { FolderSide };
