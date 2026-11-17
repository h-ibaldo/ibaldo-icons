import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface OnlineShopNotebookProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const OnlineShopNotebook: ForwardRefExoticComponent<OnlineShopNotebookProps & RefAttributes<SVGSVGElement>>;

export default OnlineShopNotebook;
export { OnlineShopNotebook };
