import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TranslateChatSplitProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TranslateChatSplit: ForwardRefExoticComponent<TranslateChatSplitProps & RefAttributes<SVGSVGElement>>;

export default TranslateChatSplit;
export { TranslateChatSplit };
